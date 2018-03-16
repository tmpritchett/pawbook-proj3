const mongoose = require('mongoose')
const Schema = mongoose.Schema

const packageSchema = new Schema({
  price: Number,
  time: Number,
  special: String
})

module.exports = packageSchema
