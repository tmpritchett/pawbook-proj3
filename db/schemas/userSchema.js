const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  petsName: String,
  emailAddress: String,
  password: String
})

module.exports = userSchema

