'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Shipment, {
        foreignKey: 'driver_id',
        constraints: false
      })
    }
  };
  Driver.init({
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    idcard_url: DataTypes.STRING,
    license_url: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'active'
    }
  }, {
    sequelize,
    modelName: 'Driver',
  });
  return Driver;
};