const express = require('express')
const router = express.Router({ mergeParams: true })

const {User} = require('../models/user')
const {Pet} = require('../models/pet')
//const Package = require('../models/package')



router.get('/', (req, res) => {
    User.findById(req.params.userId).then ((user) =>{
        console.log(user)
       const newPets = user.pets
       res.json(newPets)
    })
})




//  POST 
// router.post('/', (req, res) => {
//     const userId = req.params.userId
//     const newPet = req.body
//     User.findById(userId)
//         .then((user) => {
//             user.pets.push(newPet)
//             return user.save()
//         })
//         .then((user) => {
//             console.log(newPet)
//             res.json(newPet)
//         })
//         .catch(err => {
//             console.log(`sorry, didn't save user`)
//             console.log(err)
//         })
// })

//  READ 

// router.get('/:petId', (req, res) => {
//     const petId = req.params.petId
//     const userId = req.params.userId
//     User.findById(userId).then(user => {
//         const newPet = user.pets.id(petId)
//         res.json(pet)
//     })
//         .catch(err => {
//             console.log(err)
//             console.log('did not work')
//         })
// })


// router.delete('/:petId/delete', (req, res) => {
//     const userId = req.params.userId
//     const petId = req.params.petId

//     User.findById(userId)
//         .then(user => {
//             user.pets.id(petId).remove()
//             console.log('deleted pet')
//             return user.save()
//         })
//         .then((user) => {
//             res.json(user)
//         })
//         .catch(err => {
//             console.log('didnt delete')
//             console.log(err)
//         })
// })

 module.exports = router