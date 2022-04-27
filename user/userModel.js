const {sequelize,DataTypes} = require('../database')

const UserModel = sequelize.define("user",{
      password : {
            type:DataTypes.STRING,
            allowNull: false
      },
      email: {
            type :DataTypes.STRING,
            allowNull:false
      }
})

module.exports = UserModel