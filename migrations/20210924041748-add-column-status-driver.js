'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Drivers','status', {
      type: Sequelize.STRING,
      defaultValue: 'active',
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Drivers','status')
     
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
