/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUvKlbG7MZpLmGhfYO4eWub8ZCNtPPELoWw&usqp=CAU"
  },

  gpa: {
    type: Sequelize.FLOAT,
    allowNull: true,
    validate: {
      min: 0.0,
      max: 4.0
    }
  },
});

// Export the student model
module.exports = Student;
