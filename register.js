const express = require("express");
var mysql = require('mysql');

const app = express()
const router = express.Router();
const port = 3000;

module.exports = router;
router.post("/register", (req, res) => {
    const userInfo = req.body;
    
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "userinfodb"
    });
    
    con.connect(function (err) {
        const sql = "insert into userinfotb set ?"
        const value = {
            id: Date.now(),
            username: btoa(userInfo.userName),
            password: btoa(userInfo.password)
        }
        
        if (err) {
            console.log("error")
        }
        else {
            console.log("connneted!")
        }
        con.query(sql, value, function (err) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Inserted!");
            }
        })
    });

});