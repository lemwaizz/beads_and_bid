# beads_and_bid
https://corruption-buster.ocluse.com/api/auth/signin
## Running project locally
### Prerequisites
- node js installed
- Project cloned locally 
- docker installed and running
### Project structure
The project root has two main directories:
- database_migrator - handles initialization of our postgres database with product data. It also runs migrations on the database, ensuring that all the necessary database tables required by the app are available in the dB.
- frontend - contains all the logic that runs the frontend app, since this is a nextjs application, it also contains api routes that our frontend can interact with to fetch such things as products, user details and order details.

### Running
Running the project involves the following two steps:

1. **Initializing the database**
Since the local application requires fetching and storing data in a database, we need a running postgres instance. We are going to use docker to quickly bootstrap a local postgres instance. For this you need docker installed and running. 
Then navigate to the frontend directory and run `docker compose up postgres -d`
This kick starts our database as declared in the docker-compose.yaml file in this frontend direcotry.

The database now needs our database schemas that are used by the app.
To create the schemas navigate to the database_migrator directory and run the following set of commands:

- `npm i` to install all the dependencies,
- `npx prisma migrate dev` to create our database migrations and apply them to the dB. 

2. **Running the frontend application**
Navigate to the frontend directory and run `npm i` . This will install all the dependencies our frontend app needs.
Then run `npm run start` to run our local dev frontend app. This starts the website locally at http://localhost:6064.
