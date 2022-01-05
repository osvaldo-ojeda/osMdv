const express = require("express");
const passport = require("passport");
const userRoute = express.Router();
const { User } = require("../models");
const UserController = require("../controllers/user");

userRoute.post("/register", UserController.register);
userRoute.post("/login", passport.authenticate("local"), UserController.login);
userRoute.post("/logout",UserController.logout)
userRoute.get("/me",UserController.me)

module.exports = userRoute;
