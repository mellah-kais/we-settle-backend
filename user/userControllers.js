const UserModel = require('./userModel')


//main controller for the login page/
const loginController = async (req,res) => {
      const {email,password} = req.body
      //check if user exist
      await UserModel.sync()
      const {id} = await UserModel.create({email,password})
      //return an object containing the user id and redirect to the inscription page
      res.json(id)
}

module.exports = loginController