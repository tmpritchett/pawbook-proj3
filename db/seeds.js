
require('dotenv').config()
const mongoose = require('mongoose')


const {Package} = require('../models/package')
const {Pet} = require('../models/pet')
const {User} = require('../models/user')

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('open', () => {
  console.log('Successfully connected to mongoDB')
})
db.on('error', (err) => {
  console.log(err)
})


// Setting up all of our test data
const package1 = new Package({
  price: 125,
  time: 40,
  special: 'Add USB'
})
const pokemanPet = new Pet({
  name: 'Pokeman',
  breed: 'German Shepard',
  weight: 120,
  allergies: 'pollen, eggs',
  temperament: 'lazy',
  packages: [package1]

})
const yodaJedi = new User({
  name: 'Yoda Jedi I Am',
  pets: [pokemanPet],
  emailAddress: 'yoda@iamajedi.com', 
  password: 'Loveis'
})
// const userYoda= new profilePage({
//     name: 'Yoda Jedi I Am',
//     description:'Welcome to my PawBook page!',
//     link_to_image: 'https://i.imgur.com/NAZIYcv.jpg',
//     users: [yodaJedi]
// })
// const myPortraitView = new profilePage ({
//     petsname: 'Pokeman',
//     description: 'Memories are Made Here',
//     portraitpackage1: 'One Look: $125, 40 Minute Session, Online Gallery Access, USB Upgrade for $75 ',
//     portraitpackage2: 'Two Looks: $225, 80 Minute Session, Online Gallery Access, USB Upgrade for $100 ',
//     portraitpackage3: 'Three Looks: $325, 120 Minute Session, Online Gallery Access, USB Upgrade for $125 ',
// })


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
User.remove().then(() => {

  // THEN remove all Companies
  return yodaJedi.save()
}).then(() => {
  // THEN save multiple companies to the database

  // THEN close the database
  console.log('Saved Successfully')
  db.close()
}).catch((err) => {

  // If there are any errors, log it and then close the DB
  console.log(err)
  db.close()
})