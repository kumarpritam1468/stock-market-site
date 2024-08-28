const express = require('express');
const protectRoute = require('../middlewares/protectRoute');
const { addMoney, withdrawMoney } = require('../controllers/moneyController');

const moneyRouter = express.Router();

moneyRouter.post('/add', protectRoute, addMoney);
moneyRouter.post('/withdraw', protectRoute, withdrawMoney);

module.exports = moneyRouter;