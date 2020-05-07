const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const User = require("./user");

//APP CONFIG
mongoose.connect("mongodb://localhost:27017/userList", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//RESTFUL ROUTE
//INDEX ROUTE
app.get("/api/users", function(req, res){
    User.find({}, function(err, users){
        if(err) throw err;
        res.status(200).json({users})
    });
});
//CREATE ROUTE
app.post("/api/users/new", function(req, res){
    //create blog
    User.create(req.body.user, function(err, user){
        if(err){
            console.log(err);
            res.status(500).json('Internal Server error');
        }
        else{
            res.status(200).json({user});
        }
    });
});

//SHOW ROUTE
app.get("/api/users/:id", function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err){
            console.log(err);
            res.status(500).json('Internal Server error');
        } else {
            res.status(200).json({foundUser});
        }
    });
});
//UPDATE ROUTE
app.put("/api/users/:id", function(req, res){
    User.findById(req.params.id, function(err, user){
        if(err){
            console.log(err);
            res.status(500).json('Internal Server error');
        }
        else {
            update = req.body.user;
            user.firstName= update.firstName;
            user.lastName = update.lastName;
            user.sex = update.sex;
            user.age = update.age;
            user.password = update.password;

            user.save(function(err) {
                if (err) {
                    console.log(err);
                }
                else {
                    User.findById(req.params.id, function(err, updatedUser){
                        if(err){
                            console.log(err);
                            res.status(500).json('Internal Server error');
                        }
                        else{
                            res.status(200).json({updatedUser});
                        }
                    });
                }
            });
        }
    });
});

//DELETE ROUTE
app.delete("/api/users/:id", function(req, res){
    User.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
            res.status(500).json('Internal Server error');
        }
        else{
            res.status(200).json(`user with id ${req.params.id} is deleted.`);
        }
    })
});




app.listen(3001, () => {
    console.log("UserList server started!!!")
})