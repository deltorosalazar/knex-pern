exports.up = function (knex, Promise) {
  console.log('holaaa')
  return knex.schema.createTable('teams', function (table) {
    table.increments('id')
    table.string('name').unique()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  console.log('dude')
  return knex.schema.dropTable('teams')
}

