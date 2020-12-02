'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(`Records`, `createdAt`, {
      type: Sequelize.DATE,
      allowNull: false
    });
    await queryInterface.addColumn(`Records`, `updatedAt`, {
      type: Sequelize.DATE,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
