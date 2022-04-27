const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

// express instantiation
const app = express()

//middleWare
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))
app.use(cors())
//routes
app.use("/login",require('./user/userRoutes'))
app.use("/subscribe",require('./inscription/inscriptionRoutes'))


module.exports = app
