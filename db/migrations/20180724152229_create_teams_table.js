exports.up = function (knex, Promise) {
  return knex.schema.createTable('teams', function (table) {
    table.increments('id')
    table.string('name').unique()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = (knex, Promise) => {
  (
    knex.schema.dropTable('teams')
  )
}
