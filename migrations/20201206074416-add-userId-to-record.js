'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(`Records`, `userId`, {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'User',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(`Records`, `userId`);
  },
};
