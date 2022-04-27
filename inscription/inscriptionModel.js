const {sequelize,DataTypes} = require('../database')
const UserModel = require('../user/userModel')

const InscriptionModel = sequelize.define('inscription',{
      name: {
            type :DataTypes.STRING,
            allowNull:false
      },
      lastName : {
            type :DataTypes.STRING,
            allowNull:false
      },
      email: {
            type :DataTypes.STRING,
            allowNull:false,
            unique:true
      },
      validated: {
            type :DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false
      },
      bearer_token: {
            type :DataTypes.STRING,
      },
      validation_date:{
            type:DataTypes.DATE,
            defaultValue: DataTypes.NOW
      },
      user_id: {
            type: DataTypes.INTEGER,
            references: {
                  model: UserModel,
                  key:'id'
            }

      }
})

module.exports = InscriptionModel