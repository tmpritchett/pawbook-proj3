const mongoose = require('mongoose')
const Schema = mongoose.Schema
const packageSchema = require('./packageSchema')
const petSchema = new Schema({
  name: String,
  breed: String,
  color: String,
  weight: Number,
  allergies: String,
  temperament: String,
  packages: [packageSchema],

  
})
  

module.exports = petSchema
