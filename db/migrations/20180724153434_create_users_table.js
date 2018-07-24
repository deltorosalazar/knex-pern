exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id')
    table.string('name').notNullable()
    table.string('last_name').notNullable()
    table.string('email').notNullable().unique()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    table.integer('team_id').references('id').inTable('teams')
  })
}

exports.down = (knex, Promise) => {
  (
    knex.schema.dropTable('users')
  )
}
