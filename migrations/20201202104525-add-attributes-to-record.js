'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(`Records`, `category`, {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn(`Records`, `date`, {
      type: Sequelize.DATE
    });
    await queryInterface.addColumn(`Records`, `amount`, {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn(`Records`, `merchant`, {
      type: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(`Records`, `category`);
    await queryInterface.removeColumn(`Records`, `date`);
    await queryInterface.removeColumn(`Records`, `amount`);
    await queryInterface.removeColumn(`Records`, `merchant`);
  }
};
