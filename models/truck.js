'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Truck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Shipment, {
        foreignKey: 'truck_id',
        constraints: false
      })
    }
  };
  Truck.init({
    license_number: DataTypes.STRING,
    license_type: DataTypes.STRING,
    truck_type: DataTypes.STRING,
    production_year: DataTypes.INTEGER,
    stnk_url: DataTypes.STRING,
    kir_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Truck',
  });
  return Truck;
};