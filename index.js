const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

const { sequelize, Student, Subject, Group } = require('./models');

//Student m:1 Group
//Student m:n Subject

(async () => {
  try {
    //await sequelize.sync({ force: true });
    // C INSERT - create
    // R SELECT - findAll, findOne, findByPk
    // U UPDATE - update, upsert(INSERT OR UPDATE IF IT EXISTS)
    // D DELETE - destroy

    // const studentForInsert = {
    //   firstName: `Test999`,
    //   lastName: `Testovich999`,
    //   email: `test999@test.test`,
    //   passwordHash: bcrypt.hashSync(`999`, 10),
    //   birthday: new Date(
    //     `${(999 % 10) + 1995}/${(999 % 12) + 1}/${(999 % 28) + 1}`
    //   ),
    //   gender: 999 % 2 == 0 ? 'male' : 'female',
    //   groupId: (999 % 3) + 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // };
    // const createdStudent = await Student.create(studentForInsert);

    //SELECT * FROM Students
    //Pagination
    // const foundStudents = await Student.findAll({
    //   raw: true, //only objects with data, without any information
    //   limit: 10, //SELECT "id", "firstName", "lastName", "email", "passwordHash", "birthday", "gender", "groupId", "createdAt", "updatedAt" FROM "Students" AS "Student" LIMIT 10 OFFSET 10;
    //   offset: 10,
    // });

    // //exclude
    // const foundStudents2 = await Student.findAll({
    //   attributes: { exclude: ['firstName', 'lastName'] },
    //   raw: true, //only objects with data, without any information
    // });

    // //Filtration
    // //AND
    // const foundStudents3 = await Student.findAll({
    //   where: { firstName: 'Test9', lastName: 'Testovich9' },
    // });

    // //OR
    // const foundStudents4 = await Student.findAll({
    //   raw: true,
    //   where: {
    //     [Op.or]: [{ firstName: 'Test10' }, { lastName: 'Testovich77' }],
    //   },
    // });

    // // > 87
    // const foundStudents5 = await Student.findAll({
    //   raw: true,
    //   where: {
    //     id: { [Op.gt]: 87 },
    //   },
    // });

    // //id=10 or id<=2
    // const foundStudents6 = await Student.findAll({
    //   raw: true,
    //   where: { [Op.or]: [{ id: 10 }, { id: { [Op.lte]: 2 } }] },
    // });

    // const foundStudent = await Student.findByPk(1, { raw: true });

    // //update
    // const updatedStudent = await Student.update(
    //   { lastName: 'NewTestovich' },
    //   { where: { id: 2 } }
    // );

    // //delete
    // //truncate - delete all data from table
    // const deletedStudent = await Student.destroy({
    //   where: { firstName: 'Test99' },
    // });

    // //update all students with id from 10 to 20 (change groupId = 1)

    // const updatedStunentsGroup = await Student.update(
    //   { groupId: 1 },
    //   { where: { id: { [Op.between]: [10, 20] } } }
    // );

    // //delete students with id 1, 5, 9

    // const deletedStudents159 = await Student.destroy({
    //   where: { id: { [Op.in]: [1, 5, 9] } },
    // });

    // //Association & Magic Methods

    // const stud2 = await Student.findByPk(2);
    // console.log('stud2.getGroup():>> ', await stud2.getGroup());

    // //Change student with id 3 into group 2

    // const stud3 = await Student.findByPk(3);
    // const group2 = await Group.findByPk(2);
    // await stud3.setGroup(group2);

    // //Find student from group2

    // const studentsFromGr2 = await group2.getStudents({
    //   raw: true,
    //   where: { id: { [Op.between]: [50, 60] } },
    // });

    // //count students from group 2

    // const amoutnOfStudents = await group2.countStudents();
    // console.log(amoutnOfStudents);

    const student2 = await Student.findByPk(2);
    const subjectsOfStudent = await student2.getSubjects({
      raw: true,
      attributes: ['id', 'caption'],
    });

    //remove info about 1st student and 2nd subject

    const firstStudent = await Student.findByPk(1);
    const removeStudSubj = await firstStudent.removeSubject(2);

    console.log(removeStudSubj);
    
  } catch (err) {
    console.log('err:>>', err);
  }
})();
