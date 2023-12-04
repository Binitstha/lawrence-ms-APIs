const express = require("express");
const jwt=require('jsonwebtoken');
const bcrypt = require("bcrypt");
require("dotenv").config();
const sql = require("mysql");
const router = express.Router();

// connect do database

const db = sql.createConnection({
	host: "localhost",
	user: "root",
	password: "2319",
	database: "userDatabase",
});
db.connect((error) => {
	if (error) return error;
	console.log("Database active");
});

//signin request route


router.post("/signIn", async (req, res) => {
	

	//search for entered email
	const email = req.body.email;
	const password = req.body.password;
	const checkSql = `SELECT * FROM users WHERE email= ?`;

	db.query(checkSql, email, (error, result) => {
		if (error) return res.status(404).send("User not found");

		const dbPassword = result[0].password;

		//comare encrypted password with entered password
		bcrypt.compare(password, dbPassword, (error, result) => {
			if (error) res.status(500).send("Internal server error");

			if (result) {
				const payload=req.body;
				const secretKey="azsxdcfvgbhnjm";
				const token=jwt.sign(payload,secretKey);
				res.status(200).send(token);
			} else {
				res.send("Incorrect credentials");
			}
		});
	});
});

module.exports = router;
