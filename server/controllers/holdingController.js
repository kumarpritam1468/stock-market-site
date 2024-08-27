const Holding = require('../models/holdingModel')
const User = require('../models/userModel')

const getAll = async (req, res) => {
    try {
        const userId = req.user._id.toString();

        const holdings = await Holding.findOne({ user: userId });

        res.status(200).json(holdings);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error fetching holdings" });
    }
}

const buyStock = async (req, res) => {
    try {
        const userId = req.user._id.toString();

        const user = await User.findById(userId);

        const { name, quantity, cost } = req.body;

        if (cost > user.accountBalance) {
            return res.status(400).json({ error: "Insufficent Balance" });
        }

        const holding = await Holding.findOne({ name });

        if (holding) {
            await holding.updateOne({ $inc: { quantity: quantity } });
            await holding.updateOne({ $inc: { cost: cost } });
            await holding.save();
            await user.updateOne({ $inc: { accountBalance: -cost } });
            return res.status(200).json({ message: "Bought Stock successfully" });
        } else {
            const newHolding = new Holding({
                user: userId,
                name,
                quantity,
                cost
            });
            await newHolding.save();
            await user.updateOne({ $push: { holdings: newHolding._id } });
            await user.updateOne({ $inc: { accountBalance: -cost } });
            return res.status(200).json({ message: "Bought Stock successfully" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error buying stock" });
    }
}

const sellStock = async (req, res) => {
    try {
        const userId = req.user._id.toString();

        const user = await User.findById(userId);

        const { name, quantity, price } = req.body;

        const holding = await Holding.findOne({ name });

        if (holding) {
            if (quantity > holding.quantity) {
                return res.status(400).json({ error: "Sell quantity is more than you have" });
            } else if (quantity === holding.quantity) {
                await Holding.deleteOne({ name });
                await user.updateOne({ $pull: { holdings: holding._id } });
                await user.updateOne({ $inc: { accountBalance: price } });
                return res.status(200).json({ message: "Sold Stock successfully" });
            } else {
                await holding.updateOne({ $inc: { quantity: -quantity } });
                await holding.updateOne({ $inc: { cost: -price } });
                await holding.save();
                await user.updateOne({ $inc: { accountBalance: price } });
                return res.status(200).json({ message: "Sold Stock successfully" });
            }
        } else {
            return res.status(400).json({ error: "No stock there, need to buy" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error Selling stock" });
    }
}

module.exports = { getAll, buyStock, sellStock };