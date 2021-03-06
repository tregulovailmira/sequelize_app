'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsTo(models.Group, {
        foreignKey: 'groupId',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
      Student.belongsToMany(models.Subject, {
        through: models.Student_Subject,
        foreignKey: 'studentId',
        otherKey: 'subjectId',
      });
    }
  }
  Student.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      passwordHash: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      birthday: {
        type: DataTypes.DATEONLY,
      },
      gender: {
        type: DataTypes.STRING,
      },
      groupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Student',
    }
  );
  return Student;
};
