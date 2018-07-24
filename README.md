# Knex + Node

Node + Express API using [Knex.js](https://knexjs.org/) and PostgreSQL as database

## Setting up the environment 
* Run this command to set up the Postgres Server
````
docker-compose up -d
````
* Go to [localhost:8080](localhost:8080)
* Enter with these credentials

Server | Username | Password | Database
-------| -------- | ---------| --------
db     | postgres | postgres | postgres

### Run the Migrations
* Create the tables
````
knex migrate:latest
````

* Seed the tables
````
knex seed:run
````