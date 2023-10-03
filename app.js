require('dotenv').config({path:"./routes/.env"});
const express = require('express');
const app = express();
const expenseTracker = require('./routes/expense');
const revenueTracker = require('./routes/revenues');
const connectDB = require('./db/connect');
const errorHandlerMiddleware = require('./middlewares/errorHandler');

app.use(express.json());
app.use('/api/v1/expenses', expenseTracker);
app.use('/api/v1/revenues', revenueTracker);
app.use(errorHandlerMiddleware);

const port = 3000;

const start =  async () => {
    try{
        const url = process.env.MONGO_URI;
        await connectDB(url);
        app.listen(port, console.log(
            `Server is listening at ${port} ... `
        ));
    }
    catch(err){
        console.log(err);
    }
}

start();
