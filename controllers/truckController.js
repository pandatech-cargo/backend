const { Op } = require("sequelize");
const { Truck } = require("../models");
const { NotFoundError } = require("../helpers");

class Controller {
  static async create(req, res, next) {
    try {
      const truck = await Truck.create(req.body);
      res.status(201).json(truck);
    } catch (error) {
      next(error);
    }
  }

  static async findAll(req, res, next) {
    try {
      const {
        limit = 10,
        page = 1,
        sortBy,
        sort = "ASC",
        truckType,
        query = "",
      } = req.query;

      let params = {
        limit,
        offset: (page - 1) * limit,
        order: [["createdAt", "ASC"]],
        where: {
          license_number: {
            [Op.like]: `%${query}%`,
          },
        },
      };

      if (sortBy) {
        params = {
          ...params,
          order: [params.order, [[sortBy, sort]]],
        };
      }

      if (truckType) {
        params = {
          ...params,
          where: {
            ...params.where,
            truck_type: truckType.substring(1).slice(0, -1).split(", "),
          },
        };
      }

      const { count, rows } = await Truck.findAndCountAll({
        ...params,
        attributes: [
          "id",
          "license_number",
          "license_type",
          "truck_type",
          "production_year",
          "stnk_url",
          "kir_url",
          "status",
        ],
      });

      res.status(200).json({
        limit,
        current_page: page,
        total_page: Math.ceil(count / limit),
        data: rows,
      });
    } catch (error) {
      next(error);
    }
  }

  static async findById(req, res, next) {
    try {
      const { id } = req.params;
      const truck = await Truck.findByPk(id);

      if (!truck) {
        throw new NotFoundError("Truck not found");
      }

      res.status(200).json(truck);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const [count, updatedTruck] = await Truck.update(req.body, {
        where: {
          id,
        },
        returning: true,
      });

      if (!count) {
        throw new NotFoundError("Truck not found");
      }

      res.status(200).json(updatedTruck[0]);
    } catch (error) {
      next(error);
    }
  }

  static async activate(req, res, next) {
    try {
      const { id } = req.params;
      const updatedTruck = await Truck.update(
        { status: "active" },
        {
          where: {
            id,
          },
          returning: true,
        }
      );

      if (!updatedTruck[0]) {
        throw new NotFoundError("Truck not found");
      }

      res.status(200).json({ message: "Truck has been activated" });
    } catch (error) {
      next(error);
    }
  }

  static async deactivate(req, res, next) {
    try {
      const { id } = req.params;
      const updatedTruck = await Truck.update(
        { status: "inactive" },
        {
          where: {
            id,
          },
          returning: true,
        }
      );

      if (!updatedTruck[0]) {
        throw new NotFoundError("Truck not found");
      }

      res.status(200).json({ message: "Truck has been deactivated" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
