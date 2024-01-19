// import user from "../../../../model/user.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const signInController = async (req, res) => {
	//search for entered email
	const email = req.body.email;
	const password = atob(req.body.password);
	try {
		const currentUser = await prisma.user.findFirst({
			where: {
				email: email,
			},
		});
		// console.log(currentUser);

		bcrypt.compare(password,currentUser.password, async (error, result) => {	console.log(password);

			if (error) return console.log("server error");
			console.log(`${currentUser.id} signed in!`);

			if (result) {
				// console.log(result);
				const payload = JSON.stringify({
					id:currentUser.id,
					email:currentUser.email
				});
				const secretKey = process.env.SECRET_KEY;
				const token = jwt.sign(payload, secretKey);
				const response = {
					status: "200",
					data: token,
					message: "Signin successful",
				};

				// check for previous token
				storeToken(currentUser,token);

				return res.status(200).send(response);
			} else {
				return res.send({
					status: "401",
					error: {
						message: "Incorrect credentials",
					},
				});
			}
		});
	} catch (error) {
		res.send({
			status: "404",
			error: {
				message: "No such user found",
			},
		});
		console.error(error);
	}
};
export default signInController;



const storeToken=async (user,token)=>{
	if(await prisma.token.findFirst({
		where:{
			id:user.id
		}
	})){
		return await prisma.token.update({
			data:{
				token:token,
			},
			where:{
				id:user.id
			}
		})
	}

	return await prisma.token.create({
		data:{
			id:user.id,
			token:token
		}
	});
};