'use strict';
const bcrypt = require('bcrypt');

const demo_students = [];

for (let i = 0; i < 100; i++) {
  demo_students[i] = {
    firstName: `Test${i}`,
    lastName: `Testovich${i}`,
    email: `test${i}@test.test`,
    passwordHash: bcrypt.hashSync(`${i}`, 10),
    birthday: new Date(`${i % 10 + 1995}/${i % 12 + 1}/${i % 28 + 1}`),
    gender: i % 2 == 0 ? 'male' : 'female',
    groupId: i % 3 + 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Students', demo_students);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
