const mongoose = require('mongoose')
const Schema = mongoose.Schema
const petSchema = require('./petSchema')
const userSchema = new Schema({
  name: String,
  pets: [petSchema],
  emailAddress: String,
  password: String
})

module.exports = {userSchema}

