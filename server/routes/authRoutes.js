const express = require('express');
const { logout, login, register } = require('../controllers/authController');

const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/register', register);
authRouter.post('/logout', logout);

module.exports = authRouter;