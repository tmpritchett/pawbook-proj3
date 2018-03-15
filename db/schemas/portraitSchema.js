const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portraitSchema = new Schema({
  petsname: String,
  description: String,
  portraitPackage1: String,
  portraitPackage2: String,
  portraitPackage3: String,
})
  

module.exports = portraitSchema
