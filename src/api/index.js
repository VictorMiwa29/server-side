const express = require('express');
const { store, login } = require('../controllers/UserController');

const app = express();

app.use(express.json());

app.post('/login', login);
app.post('/register', store);

module.exports = app;
