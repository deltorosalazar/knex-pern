const userService = require('../../services/user')

exports.getAll = (req, res, next) => {
  userService.getAll()
    .then(users => {
      res.status(200).json(users)
    })
}

exports.store = (req, res, next) => {
  userService.store(req)
    .then((user) => {
      res.status(200).json({
        user: user[0]
      })
    })
    .catch(error => {
      res.status(500).json({
        error: error
      })
    })
}

exports.update = (req, res, next) => {
  userService.update(req)
    .then(user => {
      res.status(200).json({
        user: user
      })
    })
    .catch(error => {
      res.status(500).json({
        error: error
      })
    })
}

exports.delete = (req, res, next) => {
  userService.delete(req)
    .then(user => {
      res.status(200).json({
        user: user
      })
    })
    .catch(error => {
      res.status(500).json({
        error: error
      })
    })
}
