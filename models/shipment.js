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
    origin: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cities',
        key: 'id'
      }
    },
    destination: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cities',
        key: 'id'
      }
    },
    loading_date: DataTypes.DATE,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Assigned'
    },
    truck_id: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      references: {
        model: 'Trucks',
        key: 'id'
      }
    },
    driver_id: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      references: {
        model: 'Drivers',
        key: 'id'
      }
    },
    shipment_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Shipment',
  });
  return Shipment;
};