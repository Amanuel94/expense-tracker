const mongoose = require('mongoose'); 
const connectionString = "mongodb+srv://dirichletian:passaman@expresscluster.cyfo8fz.mongodb.net/EXPENSE-TRACKER?retryWrites=true&w=majority";

const connectDB = (url ) => {
    return mongoose
            .connect(connectionString )
}


module.exports = connectDB;
