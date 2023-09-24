const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Err100"],
        trim:true,
        maxlength: [30, "Err101"]
    },
    amount:{
        type: Decimal128,
        required: [true, "Err111"],
        min:[0, "Err121"]
    },
    category:{
        type: String,
        enum: ["food", "school", "entertainment", "other"],
        default: "other"
    }

})

module.exports = mongoose.model("Expenses", ExpenseSchema);