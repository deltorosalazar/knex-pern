exports.seed = (knex, Promise) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        { name: 'Christian', last_name: 'Avendaño', email: 'cavendano@belatrixsf.com', team_id: '1' },
        { name: 'Marcos', last_name: 'Alvarez', email: 'malvarez@belatrixsf.com', team_id: '2' },
        { name: 'Juan Camilo', last_name: 'Herrera', email: 'jcherrera@belatrixsf.com', team_id: '3' },
        { name: 'Jhonnatan', last_name: 'Cruz', email: 'jdcruz@belatrixsf.com', team_id: '4' },
        { name: 'Manuel', last_name: 'Del Toro', email: 'mfdeltoro@belatrixsf.com', team_id: '5' }
      ])
    })
}
