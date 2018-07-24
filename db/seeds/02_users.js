exports.seed = (knex, Promise) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        {id: 1, name: 'Christian', last_name: 'Avendaño', email: 'cavendano@belatrixsf.com', team_id: '1'},
        {id: 2, name: 'Marcos', last_name: 'Alvarez', email: 'malvarez@belatrixsf.com', team_id: '2'},
        {id: 3, name: 'Juan Camilo', last_name: 'Herrera', email: 'jcherrera@belatrixsf.com', team_id: '3'},
        {id: 4, name: 'Jhonnatan', last_name: 'Cruz', email: 'jdcruz@belatrixsf.com', team_id: '4'},
        {id: 5, name: 'Manuel', last_name: 'Del Toro', email: 'mfdeltoro@belatrixsf.com', team_id: '5'}
      ])
    })
}
