'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        as: 'city_origin',
        foreignKey: 'origin',
        constraints: false
      })
      this.belongsTo(models.City, {
        as: 'city_destination',
        foreignKey: 'destination',
        constraints: false
      })
      this.belongsTo(models.Truck, {
        foreignKey: 'truck_id',
        constraints: false
      })
      this.belongsTo(models.Driver, {
        foreignKey: 'driver_id',
        constraints: false
      })
    }
  };
  Shipment.init({
    origin: DataTypes.INTEGER,
    destination: DataTypes.INTEGER,
    loading_date: DataTypes.DATE,
    status: DataTypes.STRING,
    truck_id: DataTypes.INTEGER,
    driver_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shipment',
  });
  return Shipment;
};