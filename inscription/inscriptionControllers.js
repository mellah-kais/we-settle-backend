const InscriptionModel = require('./inscriptionModel')
const {generateAccessToken,verifyCurrentToken} = require('../util/jwtHelper')
const SendJwtByMail = require('../util/nodeMailerHelper')

const subscribeValidation = async (req,res) => {
      const {name,lastName,email,user_id} = req.body
      try {
            await InscriptionModel.sync()
            let subscription = await InscriptionModel.create({name,lastName,email,user_id,validated:true})
            console.log(subscription)
            res.json(subscription)
      } catch (err) {
            console.error(err.message)
      }
}

const creationToken = async (req,res) => {
      const {id} = req.params
      try {
            const {validated,lastName,name,email,bearer_token} = await InscriptionModel.findByPk(id)
            // verifify if the user validated the form
            if (validated) {
                  //check if he already requested a token or not
                  // if it is the first time than generate a toke
                  if (!bearer_token) {
                        const newToken = generateAccessToken({lastName,name,email})
                        await InscriptionModel.update({bearer_token:newToken},{where:{id}})
                        SendJwtByMail(newToken,email)
                        return res.send(`token created and sent by mail to ${email}`,)
                        //else verify the current stored token is valid or not (validation date)
                  } else {
                        try {
                              await verifyCurrentToken(bearer_token)
                        } catch(err){
                              const newToken = generateAccessToken({lastName,name,email})
                              await InscriptionModel.update({bearer_token:newToken},{where:{id}})
                              SendJwtByMail(newToken,email)
                              return res.send('refreshed the expired token')
                        }
                        //if still valid send it gain
                        SendJwtByMail(bearer_token,email)
                        return res.send('current token still active')
                        //if not... generate a new token and send the mail
                  }
            } else {
                  return res.send('something went wrong please subsribe again')
            }
      } catch(err) {
            console.log(err.message)
            res.json({validated:false})
      }

}

module.exports = {
      subscribeValidation,
      creationToken
}