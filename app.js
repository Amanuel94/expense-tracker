require('./db/connect');

const express = require('express');
const app = express();
const expenseTracker = require('./routes/expense');
const revenueTracker = require('./routes/revenues');

app.use(express.json());
app.use('/api/v1/expenses', expenseTracker);
app.use('/api/v1/revenues', revenueTracker);

const port = 3000;
app.listen(port, console.log(
    `Server is listening at ${port} ... `
));