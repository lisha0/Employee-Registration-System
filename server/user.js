'use strict'
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    sex: String,
    age: Number,
    password: String
});

module.exports = mongoose.model("User", userSchema);