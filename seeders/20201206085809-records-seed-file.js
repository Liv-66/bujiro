'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Records',
      Array.from({ length: 10 }).map((d, i) => ({
        name: faker.commerce.productName(),
        amount: faker.commerce.price(),
        // category: faker.commerce.department(),
        merchant: faker.commerce.department(),
        date: faker.date.past(),
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: '1'
      }))
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(`Records`, null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
