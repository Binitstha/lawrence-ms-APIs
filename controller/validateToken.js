import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

const validateToken = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		if (token) {
			return jwt.verify(token, "scht") && next();
		}
		return res.status(401).send({
			status: 401,
			error: "Token not found",
			message: "Token not found",
		});
	} catch {
		return res.status(401).send({
			status: 401,
			error: "Tempered token",
			message: "Invalid token",
		});
	}
};

export default validateToken;
