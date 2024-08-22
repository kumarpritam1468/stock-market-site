const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const connectToDB = require('./db/conn');
const authRouter = require('./routes/authRoutes');
const stockRouter = require('./routes/stockRoutes');

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/stock', stockRouter);

app.listen(PORT, () => {
    connectToDB();
    console.log(`Server running at port ${PORT}`);
})