exports.seed = (knex, Promise) => {
  return knex('teams').del()
    .then(() => {
      return knex('teams').insert([
        { name: 'Team 1' },
        { name: 'Team 2' },
        { name: 'Team 3' },
        { name: 'Team 4' },
        { name: 'Team 5' }
      ])
    })
}
