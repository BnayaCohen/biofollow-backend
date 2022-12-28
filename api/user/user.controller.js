const userService = require('./user.service')
const logger = require('../../services/logger.service')

async function getUser(req, res) {
    try {
        const user = await userService.getById(req.params.id)
        res.send(user)
    } catch (err) {
        logger.error('Failed to get user', err)
        res.status(500).send({ err: 'Failed to get user' })
    }
}

async function getUserCounter(req, res) {
    try {
        const userCounter = await userService.getUserCounter(req.query.params.fullname.toLowerCase(), req.query.params.digits.toLowerCase())
        res.send({userCounter})
    } catch (err) {
        logger.error('Failed to get user counter', err)
        res.status(500).send({ err: 'Failed to get user counter' })
    }
}

async function getUsers(req, res) {
    try {
        const filterBy = {
            txt: req.query?.params?.txt || '',
        }
        const users = await userService.query(filterBy)
        res.send(users)
    } catch (err) {
        logger.error('Failed to get users', err)
        res.status(500).send({ err: 'Failed to get users' })
    }
}

async function deleteUser(req, res) {
    try {
        await userService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete user', err)
        res.status(500).send({ err: 'Failed to delete user' })
    }
}

async function updateUser(req, res) {
    try {
        const user = req.body
        const savedUser = await userService.update(user)
        res.send(savedUser)
    } catch (err) {
        logger.error('Failed to update user', err)
        res.status(500).send({ err: 'Failed to update user' })
    }
}

async function addUser(req, res) {
    try {
        const user = req.body
        const savedUser = await userService.add(user)
        res.send(savedUser)
    } catch (err) {
        logger.error('Failed to add user', err)
        res.status(500).send({ err: 'Failed to add user' })
    }
}

module.exports = {
    getUser,
    getUsers,
    deleteUser,
    updateUser,
    addUser,
    getUserCounter
}