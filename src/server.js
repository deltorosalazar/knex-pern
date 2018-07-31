const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3004

const app = express()
const api = require('./api')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.use('/api/v1', api)

app.listen(port, () => app.emit('app::started'))

module.exports = {
  server: app
}
