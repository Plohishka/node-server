const express = require('express');
const { registrationUserSchema } = require('./schemas/userValidation');
const app = express();

const PORT = 5000;

const bodyParser = express.json();

const {validateUser} = require('./middlewares/index');

const UserController = require('./controllers/UserController');

app.post('/user', bodyParser, validateUser, UserController.createUser);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})