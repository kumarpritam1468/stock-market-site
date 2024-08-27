const express = require('express');
const { getAll, buyStock, sellStock } = require('../controllers/holdingController');
const protectRoute = require('../middlewares/protectRoute');

const holdingRouter = express.Router();

holdingRouter.get('/all', protectRoute, getAll);
holdingRouter.post('/buy', protectRoute, buyStock);
holdingRouter.post('/sell', protectRoute, sellStock);

module.exports = holdingRouter;