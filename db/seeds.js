const mongoose = require('mongoose')
const Schema = mongoose.Schema

const  UserSchema= new Schema({
    name: String,
    email_address: String,
}, {usePushEach: true})

const ProfilePageSchema = new Schema({
    name: String,
    description: String,
    link_to_image: {type: String, default: "https://imgur.com/9Bi8OCL"},
    days: [DaySchema]
}, {usePushEach: true})

const UserSchema = new Schema({
    name: {type: String, required: true},
    picture_link: String,
    meditations: [MeditationSchema]
}, {usePushEach: true})

module.exports = {
    UserSchema,
    DaySchema,
    MeditationSchema
}
