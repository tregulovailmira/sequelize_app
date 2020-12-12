'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Subjects',
      [
        {
          caption: 'IT Technology',
          hoursQuantity: 90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          caption: 'Data Bases',
          hoursQuantity: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          caption: 'Web Dev',
          hoursQuantity: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Subjects', null, {});
  },
};
