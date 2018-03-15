
require('dotenv').config()
const mongoose = require('mongoose')


const Portrait = require('../models/portrait')
const Profile = require('../models/profile')
const User = require('../models/user')

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('open', () => {
  console.log('Successfully connected to mongoDB')
})
db.on('error', (err) => {
  console.log(err)
})

// Setting up all of our test data
const stanP = new Coach({
  name: 'Stanley J Pritchett Jr',
  positionTitle: 'Head Coach',
  yearsExperience: 7,
  stats: 'pppp'
})
const falcons = new Team({
    name: 'Falcons',
    location: 'Atlanta, GA',
    coaches: [stanP]
})

// const pepsiCola = new Soda({
//   name: 'Pepsi',
//   price: 2.50,
//   packaging: 'can',
//   quantitySold: 400
// })
// const dietCoke = new Soda({
//   name: 'Diet Coke',
//   price: 1.00,
//   packaging: 'can',
//   quantitySold: 690
// })
// const mtnDew = new Soda({
//   name: 'Mountain Dew',
//   price: 10.50,
//   packaging: 'bottle',
//   quantitySold: 10
// })
// const pepsi = new Company({
//   name: 'Pepsi',
//   location: 'who cares',
//   sodas: [ pepsiCola, mtnDew ]
// })
// const coke = new Company({
//   name: 'Coca-Cola',
//   location: 'Atlanta, GA',
//   sodas: [ dietCoke, sprite ]
// })

// remove all Sodas
Coach.remove().then(() => {

  // THEN remove all Companies
  return Team.remove()
}).then(() => {

  // THEN save multiple companies to the database
  return falcons.save()
}).then(() => {

  // THEN close the database
  console.log('Saved Successfully')
  db.close()
}).catch((err) => {

  // If there are any errors, log it and then close the DB
  console.log(err)
  db.close()
})