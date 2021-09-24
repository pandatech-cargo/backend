const { Op } = require("sequelize");
const { Truck } = require("../models");

class Controller {
  static async create(req, res, next) {
    try {
      const truck = await Truck.create(req.body);
      res.status(201).json(truck);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
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
        where: {
          license_number: {
            [Op.like]: `%${query}%`,
          },
        },
      };

      if (sortBy) {
        params = {
          ...params,
          order: [[sortBy, sort]],
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
      res.status(500).json({ message: "internal server error" });
    }
  }
}

module.exports = Controller;
