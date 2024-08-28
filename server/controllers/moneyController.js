const addMoney = async (req, res) => {
    try {
        const user = req.user;
        const { amount } = req.body;

        await user.updateOne({ $inc: { accountBalance: amount } });

        res.status(200).json({ message: "Added Money Successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error adding money" });
    }
}

const withdrawMoney = async (req, res) => {
    try {
        const user = req.user;
        const { amount } = req.body;

        if (amount > user.accountBalance) {
            return res.status(400).json({ error: "Not enough balance" });
        }

        await user.updateOne({ $inc: { accountBalance: -amount } });

        res.status(200).json({ message: "Withdrawn money successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error adding money" });
    }
}

module.exports = { addMoney, withdrawMoney };