const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');

const RevenueSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Err200"],
        trim:true,
        maxlength: [30, "Err201"]
    },
    amount:{
        type: Decimal128,
        required: [true, "Err211"],
        min:[0, "Err221"]
    },
    category:{
        type: String,
        enum: ["salary", "allowance", "other"],
        default: "other"
    },
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    }

})

module.exports = mongoose.model("Revenues", RevenueSchema);