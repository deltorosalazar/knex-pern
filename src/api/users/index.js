const express = require('express')
const router = express.Router()

const userController = require('./UserController')

router.get('/', userController.getAll)

router.post('/', userController.store)

router.put('/:id', userController.update)

router.delete('/:id', userController.delete)

module.exports = router
