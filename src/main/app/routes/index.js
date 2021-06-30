const express = require('express');
const app = express();
const RegisterUser = require('./RegisterUser');

app.use('/1.0/registerUser', RegisterUser);

module.exports = app;

/**
1. sticker in app
2. create new sticker
3. uploadNewSticker - backend

**/