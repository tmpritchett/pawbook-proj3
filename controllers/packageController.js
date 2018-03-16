const express = require('express')
const router = express.Router({ mergeParams: true })

const User = require('../models/user')
const Pet = require('../models/pet')
const Package = require('../models/package')

// POST/CREATE
router.post('/', (req, res) => {
    const userId = req.params.userId
    const newPackage= req.body
    User.findById(userId)
        .then((user) => {
            user.package.push(newPackage)
            return user.save()
        })
        .then((user) => {
            console.log(newPackage)
            res.json(newPackage)
        })
        .catch(err => {
            console.log(`did not save`)
            console.log(err)
        })
})
// READ
router.get('/:packageId', (req, res) => {
    const packageId = req.params.packageId
    const userId = req.params.userId
    User.findById(userId).then(user => {
        const package = user.package.id(packageId)
        res.json(pet)
    })
        .catch(err => {
            console.log(err)
            console.log('no go')
        })
})

// DELETE
router.delete('/:packageId/delete', (req, res) => {
    const userId = req.params.userId
    const paackageId = req.params.packageId

    User.findById(userId)
        .then(user => {
            user.package.id(packageId).remove()
            console.log('deleted package')
            return user.save()
        })
        .then((user) => {
            res.json(user)
        })
        .catch(err => {
            console.log('did not delete')
            console.log(err)
        })
})

 module.exports = router

