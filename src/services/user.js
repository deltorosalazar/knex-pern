const knex = require('../../db/knex')
const knexPopulate = require('knex-populate')

exports.getAll = function () {
  return knexPopulate(knex, 'users')
    .find()
    .populate('teams', 'team_id', 'team')
    .exec()
}

exports.store = (req) => (
  knex('users')
    .returning(['id', 'name', 'last_name', 'team_id'])
    .insert({
      'name': req.body.name,
      'last_name': req.body.last_name,
      'email': req.body.email,
      'team_id': req.body.team_id
    })
)

exports.update = (req) => {
  (
    knex('users')
      .returning(['id', 'name', 'last_name', 'team_id'])
      .where('id', req.params.id)
      .update({
        'name': req.body.name,
        'last_name': req.body.last_name,
        'email': req.body.email,
        'team_id': req.body.team_id
      })
  )
}

exports.delete = (req) => {
  (
    knex('users')
      .returning(['id', 'name', 'last_name', 'team_id'])
      .where('id', req.params.id)
      .del()
  )
}
