exports.seed = (knex, Promise) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        { name: 'Christian', last_name: 'Avendaño', email: 'cavendano@youremail.com', team_id: '1' },
        { name: 'Marcos', last_name: 'Alvarez', email: 'malvarez@youremail.com', team_id: '2' },
        { name: 'Juan Camilo', last_name: 'Herrera', email: 'jcherrera@youremail.com', team_id: '3' },
        { name: 'Jhonnatan', last_name: 'Cruz', email: 'jdcruz@youremail.com', team_id: '4' },
        { name: 'Manuel', last_name: 'Del Toro', email: 'mfdeltoro@youremail.com', team_id: '5' }
      ])
    })
}
