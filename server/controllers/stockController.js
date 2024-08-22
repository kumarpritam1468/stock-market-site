const Stock = require("../models/stockModel.js");

const getAll = async (req, res) => {
    try {
        const stocks = await Stock.find();

        res.status(200).json(stocks);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to fetch stocks" });
    }
}

const addStock = async (req, res) => {
    try {
        const { name, price, percent, isDown } = req.body;

        const newStock = new Stock({
            name,
            price,
            percentChange:percent,
            isDown
        });

        await newStock.save();

        res.status(200).json(newStock);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to add stock" });
    }
}

module.exports = { getAll, addStock }