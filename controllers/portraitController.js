const express = require('express')
const router = express.Router({ mergeParams: true })

const User = require('../models/user')
const Profile = require('../models/profile')
const Portrait = require('../models/portrait')

// POST/CREATE
router.post('/', (req, res) => {
    const userId = req.params.userId
    const newPortrait= req.body
    User.findById(userId)
        .then((user) => {
            user.portrait.push(newProfile)
            return user.save()
        })
        .then((user) => {
            console.log(newPortrait)
            res.json(newPortrait)
        })
        .catch(err => {
            console.log(`did not save`)
            console.log(err)
        })
})
// READ
router.get('/:portraitId', (req, res) => {
    const portraitId = req.params.portraitId
    const userId = req.params.userId
    User.findById(userId).then(user => {
        const portrait = user.portrait.id(portraitId)
        res.json(profile)
    })
        .catch(err => {
            console.log(err)
            console.log('no go')
        })
})

// DELETE
router.delete('/:portraitId/delete', (req, res) => {
    const userId = req.params.userId
    const portraitId = req.params.portraitId

    User.findById(userId)
        .then(user => {
            user.portrait.id(portraitId).remove()
            console.log('deleted portrait')
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

 