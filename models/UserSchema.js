const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Err300"],
        trim:true,
        maxlength: [30, "Err301"]
    },
    dob:{
        type: Date,
        required: [true, "Err311"],
        min:['2000-01-01', "Err321"],
        max: ['2050-12-31', "Err321"]
    },
    email:{
        type: String,
        required:[true, "Err331"],
        unique: true
    },
    password: { type: String },
    token: { type: String }

})

module.exports = mongoose.model("User", UserSchema);