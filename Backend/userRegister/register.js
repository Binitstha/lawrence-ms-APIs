const express = require("express");
var mysql = require('mysql');
const bcrypt = require('bcrypt')

const router = express.Router();
const port = 3000;
const User = require('./user.js')

router.post("/register", async (req, res) => {
    try {
        const userInfo = req.body;

        await User.create({
            id: Date.now(),
            email: userInfo.email,
            password: await bcrypt.hash(userInfo.password, 10),
            token: userInfo.token,
        });
        console.log("hello1")
    }

    catch (error) {
        console.error(error);
    }
    res.send("hello");
});

module.exports = router;