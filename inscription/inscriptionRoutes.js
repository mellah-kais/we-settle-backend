const router = require('express').Router()
const {subscribeValidation,creationToken} = require('./inscriptionControllers')


router.route('/').post(subscribeValidation)
router.route('/:id').get(creationToken)

module.exports = router