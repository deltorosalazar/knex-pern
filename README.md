# Knex + Node

Node + Express API using [Knex.js](https://knexjs.org/), PostgreSQL as database and deployment in AWS Lambda

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

## Testing the API
### Local Environment without Serverless
* This command will allow you to test the API omitting the Serverless Environment Variables
````
npm run start
````

### Local Environment with Serverless
* This command will allow you to test the API using the Serverless Environment Variables
````
npm run sls-offline
````

## Deploying the API
````
sls deploy 
````