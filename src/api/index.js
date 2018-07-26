const express = require('express')
const router = express.Router()
const knex = require('../../db/knex')

const users = require('./users')

router.use('/users', users)

router.get('/health-check', (req, res, next) => {
  res.status(200).json({
    db: knex.client.database(),
    dbStatus: 'OK',
    message: process.env.MESSAGE
  })
})

module.exports = router
