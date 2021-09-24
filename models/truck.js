"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Truck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Shipments, {
        foreignKey: "truck_id",
        constraints: false,
      });
    }
  }
  Truck.init(
    {
      license_number: {
        type: DataTypes.STRING,
        unique: true,
      },
      license_type: DataTypes.STRING,
      truck_type: DataTypes.STRING,
      production_year: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1970,
        },
      },
      stnk_url: DataTypes.STRING,
      kir_url: DataTypes.STRING,
      status: {
        type: DataTypes.STRING,
        defaultValue: "active",
      },
    },
    {
      sequelize,
      modelName: "Truck",
    }
  );
  return Truck;
};
