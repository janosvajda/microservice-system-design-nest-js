## Running the example with docker-compose
Execute `docker network create infrastructure && cp .env.example .env && docker-compose up -d` from the root of the repository
## Accessing the API itself and swagger docs for the API
- Once you launch the API it will be accessible on port 8000.
- Swagger docs for the API will be accessible locally via URI "**http://localhost:8000/api**"
## Launch services for integration testing (using docker-compose)
- Execute `sudo vim /etc/hosts` and add line `127.0.0.1 db` to it. This is a temporary step, it will not be required since new update.
- Execute `cp .env.example .env && cp .env.test.example .env.test`
- Execute `docker-compose -f ./docker-compose.test.yml up -d` from the root of the repository
- Run `cd ./gateway && npm install && npm run test` from the root of this repo
## Architecture overview
This API showcase consists of the following parts:
- API gateway
- Token service - responsible for creating, decoding, destroying JWT tokens for users
- User service - responsible for CRUD operations on users
- Mailer service - responsible for sending out emails (confirm sign up)
- Permission service - responsible for verifying permissions for logged in users.
- Tasks service - responsible for CRUD operations on users tasks records
- The service interact via **TCP sockets**
