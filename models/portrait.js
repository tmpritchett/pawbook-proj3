const mongoose = require('mongoose')
const portraitSchema = require('../db/schemas/portraitSchema')


const Portrait = mongoose.model('portrait', portraitSchema)

module.exports = Portrait 
