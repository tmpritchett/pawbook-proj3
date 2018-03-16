const mongoose = require('mongoose')
const packageSchema = require('../db/schemas/packageSchema')


const Package = mongoose.model('package', packageSchema)

module.exports = {Package} 
