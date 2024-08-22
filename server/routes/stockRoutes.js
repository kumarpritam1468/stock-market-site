const express = require("express");
const { getAll, addStock } = require("../controllers/stockController");

const stockRouter = express.Router();

stockRouter.get('/all', getAll);
stockRouter.post('/add', addStock);

module.exports = stockRouter;