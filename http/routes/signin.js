import express from 'express';
// const jwt=require('jsonwebtoken');
import jwt from 'jsonwebtoken';
// const bcrypt = require("bcrypt");
import bcrypt from 'bcrypt';
// require("dotenv").config();
import dotenv from 'dotenv';
dotenv.config();
// const sql = require("mysql2");
import sql from 'mysql2';
const router = express.Router();

// const user=require('../../models/user.js');
import user from '../../models/user.js';


router.post("/signIn", async (req, res) => {
	

	//search for entered email
	const email = req.body.email;
	const password = req.body.password;

	try{
	const currentUser= await user.findAll({
		where: {
			email:email,
		}
	});
	
	bcrypt.compare(password,currentUser[0].password,(error,result)=>{
		if(error) return console.log("server error");
		
		if(result){
			const payload=req.body;
			const secretKey=process.env.SECRET_KEY;
			const token=jwt.sign(payload,secretKey);
			return res.status(200).send(token);
		}
		else{
			return res.send('Incorrect credentials');
		}
	})
	
}catch(error){
	res.send('No user found');
	console.error("error");
}
});


export default router;
