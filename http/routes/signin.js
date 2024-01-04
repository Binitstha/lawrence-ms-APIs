import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();
import user from '../../model/user.js';

router.post("/signIn", async (req, res) => {
	

	//search for entered email
	const email = req.body.email;
	const password = atob(req.body.password);
	try{
	const currentUser= await user.findOne({
		where: {
			email:email,
		}
	});
	
	bcrypt.compare(password,currentUser.password,(error,result)=>{
		if(error) return console.log("server error");
		console.log(result);
		if(result){
			console.log(result);
			const payload=req.body;
			const secretKey=process.env.SECRET_KEY;
			const token=jwt.sign(payload,secretKey);
			const response={
				status:'200',
				data:currentUser,
				message:'Signin successful',
			}
			return res.status(200).send(response);
		}
		else{
			return res.send({
				status:'401',
				error:{
					message:'Incorrect credentials',
				}
			});
		}
	})
	
}catch(error){
	res.send({
		status:'404',
		error:{
			message:'No such user found',
		}
	});
	console.error(error);
}
});
export default router;