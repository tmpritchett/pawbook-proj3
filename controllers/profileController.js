const express = require('express')
const router = express.Router({ mergeParams: true })

const User = require('../models/user')
const Profile = require('../models/profile')
const Portrait = require('../models/portrait')

// POST
router.post('/', (req, res) => {
    const userId = req.params.userId
    const portraitId = req.params.portraitId
    const newProfile= req.body
    User.findById(userId)
        .then((user) => {
            const user = user.user.id(userId)
            user.profiles.push(newProfile)
            return user.save()
        })
        .then((user) => {
            res.json(newProfile)
            console.log("It worked!")
        })
        .catch(err => {
            console.log(`did not save new profile`)
            console.log(err)
        })

})

// READ
router.get('/:profileId', (req, res) => {
    const portraitId = req.params.portraitId
    const userId = req.params.userId
    const profileId = req.params.profileId
    User.findById(userId).then(user => {
        const user = user.users.id(userId)
        const profile = user.profiles.id(profileId)
        res.json(user.profile.id(profileId))
    })
        .catch(err => {
            console.log(err)
            console.log('did not work')
        })
})
// DELETE
router.delete('/:profileId/delete', (req, res) => {
    const userId = req.params.userId
    const portraitId = req.params.portraitId
    const profileId = req.params.profileId

    User.findById(userId)
        .then(user => {
            const profile = user.profiles.id(profileId)
            user.profile.id(profileId).remove()
            console.log('deleted profile')
            return user.save()
        })
        .then((user) => {
            console.log("does this happen")
            res.json(user)
        })
        .catch(err => {
            console.log('did not delete')
        })
})

 module.exports = router



