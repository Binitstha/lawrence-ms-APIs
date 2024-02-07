// import user from "../../../../model/user.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const signInController = async (req, res) => {
	const email = req.body.email;
	const password = atob(req.body.password);
	try {
		const currentUser = await prisma.user.findFirst({
			where: {
				email: email,
			},
		});
		bcrypt.compare(password, currentUser.password, async (error, result) => {
			if (error) return console.log("server error");

			if (result) {
				console.log(`${currentUser.id} signed in!`);
				const payload = JSON.stringify({
					id: currentUser.id,
					email: currentUser.email,
				});
				const secretKey = process.env.SECRET_KEY;
				const token = jwt.sign(payload, secretKey);
				const response = {
					status: "200",
					data: token,
					message: "Signin successful",
				};

				// check for previous token
				storeToken(currentUser, token);

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
export { signInController };

const storeToken = async (user, token) => {
	if (
		await prisma.token.findFirst({
			where: {
				id: user.id,
			},
		})
	) {
		return await prisma.token.update({
			data: {
				token: token,
			},
			where: {
				id: user.id,
			},
		});
	}

	return await prisma.token.create({
		data: {
			id: user.id,
			token: token,
		},
	});
};


export const getUserFullDetails = async (req, res) => {

	const token = req.headers.authorization.split(' ')[1]
	const secretKey = process.env.SECRET_KEY
	try {
		const decodedToken = jwt.verify(token, secretKey)
		const userId = decodedToken.id
		await prisma.user.findFirstOrThrow({
			where: {
				id: userId
			}
		}).then((data) => {
			const { password, ...responsedata } = data;
			res.status(200).send({
				status: 200,
				data: responsedata,
				message: 'Data retrived sucessfully'
			})
		})
	} catch (err) {
		console.log(err);
	}
}