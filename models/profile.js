const mongoose = require('mongoose')
const profileSchema = require('../db/schemas/profileSchema')


const Profile = mongoose.model('profile', profileSchema)

module.exports = Profile 