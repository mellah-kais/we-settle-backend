const { Sequelize,DataTypes } = require('sequelize');

const sequelize = new Sequelize('Validation', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres'
})

const verify = async () => {
  try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }}

verify()

module.exports = {sequelize,DataTypes}

