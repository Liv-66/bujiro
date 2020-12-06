'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(`Users`, [
      {
        name: 'user1',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'user2',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(`Users`, null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
