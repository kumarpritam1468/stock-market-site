const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const connectToDB = require('./db/conn');
const authRouter = require('./routes/authRoutes');
const stockRouter = require('./routes/stockRoutes');
const holdingRouter = require('./routes/holdingRoutes');
const moneyRouter = require('./routes/moneyRoutes');

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/stock', stockRouter);
app.use('/api/holding', holdingRouter);
app.use('/api/money', moneyRouter);

app.listen(PORT, () => {
    connectToDB();
    console.log(`Server running at port ${PORT}`);
})