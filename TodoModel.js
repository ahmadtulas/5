const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./connectDB.js');

class Todo extends Model {}

Todo.init({
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dueDate: {
    type: DataTypes.DATEONLY
    // allowNull defaults to true
  },
  completed: {
    type: DataTypes.BOOLEAN
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
});

// the defined model is the class itself

module.exports = Todo;

Todo.sync();