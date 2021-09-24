'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trucks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      license_number: {
        type: Sequelize.STRING
      },
      license_type: {
        type: Sequelize.STRING
      },
      truck_type: {
        type: Sequelize.STRING
      },
      production_year: {
        type: Sequelize.INTEGER
      },
      stnk_url: {
        type: Sequelize.STRING
      },
      kir_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Trucks');
  }
};