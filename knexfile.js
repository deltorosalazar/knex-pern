const path = require('path')

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '0.0.0.0',
      user: 'postgres',
      password: 'password',
      database: 'postgres'
    },
    migrations: {
      directory: path.join(__dirname, 'db/migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db/seeds')
    }
  },
  staging: {
    client: 'pg',
    connection: {
      host: '0.0.0.0',
      user: 'postgres',
      password: 'password',
      database: 'postgres'
    },
    migrations: {
      directory: path.join(__dirname, 'db/migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db/seeds')
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db/migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db/seeds')
    }
  }
}
