require('dotenv').config()
const jwt = require('jsonwebtoken')


function generateAccessToken(subscriptionInfo) {
      return jwt.sign(subscriptionInfo, process.env.SECRET_TOKEN, { expiresIn: '86400s' });
}
const verifyCurrentToken = async (bearer_token) => {
      return await jwt.verify(bearer_token, process.env.SECRET_TOKEN)

}

module.exports = {
      generateAccessToken,
      verifyCurrentToken
}