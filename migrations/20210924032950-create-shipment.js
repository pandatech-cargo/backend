'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Shipments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      origin: {
        type: Sequelize.INTEGER,
        references: { model: 'Cities', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      destination: {
        type: Sequelize.INTEGER,
        references: { model: 'Cities', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      loading_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      truck_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Trucks', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      driver_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Drivers', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
    await queryInterface.dropTable('Shipments');
  }
};