const express = require('express')
const router = express.Router({ mergeParams: true })

const {User} = require('../models/user')
// const Profile = require('../models/profile')
// const Portrait = require('../models/portrait')

// READ
router.get('/', (req, res) => {
  User.find({}).then(user => {
    res.json(user)
    
  }).catch(err => {
    console.log(error)
    res.json("caught error")
  })
})

// POST/CREATE A USER
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    petsName: req.body.petsname,
    emailAddress: req.body.emailaddress,
    password: req.body.password
  })
  newUser.save()
    .then(user => {
      console.log(user.name + " is in the database")
      res.json(user)
    })
    .catch(err => {
      console.log(`sorry`)
      console.log(err)
    })
})


// READ
router.get('/:userId', (req, res) => {
  const userId = req.params.userId
  User.findById(userId).then(user => {
    res.json(user)
  })
 })

// PUT/EDIT
router.put('/:userId', (req, res) => {
  const updated = {
    name: req.body.name,
    petsName: req.body.petsname,
    emailAddress: req.body.emailaddress,
    password: req.body.password
  }
  const userId = req.params.userId
  User.findByIdAndUpdate(userId, updated, { new: true })
    .then(user => {
      console.log('user updated!')
      res.json(user)
    })
    .catch(err => {
      console.log(err)
    })

 })

// DELETE
router.delete('/:userId/delete', (req, res) => {
  const userId = req.params.userId
  User.findByIdAndRemove(userId)
  .then(user=>{
    res.json(user)
    console.log('deleted user')
  }).catch(err=>{
    console.log('didnt delete')
    console.log(err)
  })
})


module.exports = router
