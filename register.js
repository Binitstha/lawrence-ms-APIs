const express = require("express");
var mysql = require('mysql');
const bcrypt = require('bcrypt')

const app = express()
const router = express.Router();
const port = 3000;
const User = require('./user.js')

router.post("/register", async (req, res) => {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "userinfodb"
    });

    try {
        const userInfo = req.body;

        const newUser = await User.create({
            id: Date.now(),
            username: userInfo.username,
            password: await bcrypt.hash(userInfo.password, 10),
            role: userInfo.role,
        });

    }
    catch (error) {
        console.error(error);
    }
});

module.exports = router;