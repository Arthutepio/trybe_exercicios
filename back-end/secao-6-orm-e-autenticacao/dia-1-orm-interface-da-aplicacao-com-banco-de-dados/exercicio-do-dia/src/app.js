const express = require('express');

const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/user', User.getAll);// modificar rota

module.exports = app;