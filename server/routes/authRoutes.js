const express = require('express');
const { logout, login, register, getMe } = require('../controllers/authController');
const protectRoute = require('../middlewares/protectRoute.js');

const authRouter = express.Router();

authRouter.get('/me', protectRoute, getMe);
authRouter.post('/login', login);
authRouter.post('/register', register);
authRouter.post('/logout', logout);

module.exports = authRouter;