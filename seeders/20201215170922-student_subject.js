'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Student_Subjects',
      [
        {
          studentId: 1,
          subjectId: 1,
          mark: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          studentId: 1,
          subjectId: 2,
          mark: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          studentId: 2,
          subjectId: 1,
          mark: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          studentId: 2,
          subjectId: 2,
          mark: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Student_Subjects', null, {});
  },
};
