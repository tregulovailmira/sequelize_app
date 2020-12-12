'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Groups',
      [
        {
          groupCode: 'fe2020-1',
          departmentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupCode: 'fe2020-2',
          departmentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          groupCode: 'fe2020-3',
          departmentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Groups', null, {});
  },
};
