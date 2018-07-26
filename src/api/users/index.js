const express = require('express')
const router = express.Router()

const usersController = require('./controller')

router.get('/', usersController.getAll)

router.post('/', usersController.store)

router.put('/:id', usersController.update)

router.delete('/:id', usersController.delete)

module.exports = router
