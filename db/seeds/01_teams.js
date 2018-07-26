exports.seed = (knex, Promise) => {
  return knex('teams').del()
    .then(() => {
      return knex('teams').insert([
        { name: 'Implementation Team' },
        { name: 'LS Marketing' },
        { name: 'Strategic Initiatives Team' },
        { name: 'Warehouse Partner Analyst' },
        { name: 'Guest' }
      ])
    })
}
