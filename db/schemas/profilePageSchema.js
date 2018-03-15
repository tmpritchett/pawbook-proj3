const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profilePageSchema = new Schema({
  name: String,
  description: String,
  link_to_image: {type: String, default: "https://i.imgur.com/NAZIYcv.jpg"}
})
  

module.exports = profilePageSchema
