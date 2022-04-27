const router = require('express').Router()
const loginController = require('./userControllers')

router.route('/').post(loginController)

module.exports = router