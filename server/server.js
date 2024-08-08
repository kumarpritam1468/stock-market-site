const express = require('express');
const dotenv = require('dotenv');

const connectToDB = require('./db/conn');

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
    connectToDB();
    console.log(`Server running at port ${PORT}`);
})