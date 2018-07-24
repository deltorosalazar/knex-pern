exports.seed = (knex, Promise) => {
  return knex('teams').del()
    .then(() => {
      return knex('teams').insert([
        {id: 1, name: 'Implementation Team'},
        {id: 2, name: 'LS Marketing'},
        {id: 3, name: 'Strategic Initiatives Team'},
        {id: 4, name: 'Warehouse Partner Analyst'},
        {id: 5, name: 'Guest'}
      ])
    })
}
