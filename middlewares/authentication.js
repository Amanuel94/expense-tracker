require('dotenv').config({ path: "./routes/.env" });
const asyncWrapper = require('./async');
const { createCustomAPIError } = require('../errors/custom-error');
const jwt = require("jsonwebtoken");


const verifyUser = asyncWrapper(async (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (!bearerHeader)
        return next(createCustomAPIError("Authorization Required", 401))

    const token = bearerHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
        // console.log(decoded);
    } catch (err) {
        return next(createCustomAPIError("invalid token", 401));
    }

    
    return next()
})

module.exports = verifyUser;