'use strict'
const mongoose = require("mongoose");
const User = require("./user");
const faker = require("faker")

mongoose.connect("mongodb://localhost:27017/userList", {useNewUrlParser: true});


for (let i = 0; i < 35; i++) {
    let fn = faker.name.firstName();
    let ln = faker.name.lastName();
    let sex = Math.random() >= 0.5? 'Male' : 'Female';
    let age = Math.floor(Math.random() * (100));
    let password = faker.internet.password();
    const newUser = {
        firstName: fn,
        lastName: ln,
        sex: sex,
        age: age,
        password: password
    }

    User.create(newUser, function(err, user){
        if (err) {
            console.log(err);
        }
        else{
            console.log('new user added.')
        }
    });
};