const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectToDB;