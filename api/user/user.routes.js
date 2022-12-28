const express = require('express')
// const {requireAuth} = require('../../middlewares/requireAuth.middleware')
const { getUser, getUsers, deleteUser, updateUser, addUser, getUserCounter } = require('./user.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getUsers)
router.get('/counter', getUserCounter)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.post('/', addUser)
router.delete('/:id', deleteUser)

module.exports = router