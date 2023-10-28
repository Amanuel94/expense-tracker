require('dotenv').config({ path: "./routes/.env" });
const asyncWrapper = require("../middlewares/async");
const users = require("../models/UserSchema");
const bcrypt = require('bcrypt');
const { createCustomAPIError } = require("../errors/custom-error");
const jwt = require('jsonwebtoken');

const loginUser = asyncWrapper(async (req, res, next) => {
    const { email, password } = req.body;
    if (!(email && password))
        return next(createCustomAPIError('Email and Password required', 401))
    const user = await users.findOne({ email: email });
    if (!user)
        return next(createCustomAPIError("Email not found", 401));
    if (!bcrypt.compareSync(password, user.password)) {
        return next(createCustomAPIError("Email or password is incorrect", 401));
    }

    const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );

    user.token = token;
    res.status(200).json(user);


});

const registerUser = asyncWrapper(async (req, res, next) => {
    const { username, dob, email, password } = req.body;

    if (!(username && dob && email && password)) {
        return next(createCustomAPIError('All fields are required', 401));
    }
    const oldUser = await users.findOne({ email });
    if (oldUser) {
        return next(createCustomAPIError('Email already exists', 401));
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await users.create({
        name: username,
        dob: dob,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: hashedPassword,
    });

    const token = jwt.sign({ user_id: newUser._id, email },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );
    newUser.token = token;
    res.status(201).json(newUser);
});

module.exports = { loginUser, registerUser }