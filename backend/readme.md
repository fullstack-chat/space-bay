## Space Bay Express API

### Install
Either a local or cloud instance of MongoDB can be used for the API. 
The URL mongoose uses to connect can be changed in the ``.env`` file 
```
cd backend

npm install

//For development
npm run dev

//For production
npm run start

```
### Structure
This API uses an MVC-style structure.

Routes - The API's endpoints
Controllers - These contain logic for interacting with services and sending back a response to the client
Services - These contain logic for interacting with models using Mongoose

### API Documentation
Documentation can be found by starting the server and heading to ``/api-docs``. 