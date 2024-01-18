import studentData from "../../../model/students/studentModel.js";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getStudentDataController = async (req, res) => {
	try {
		const result = await studentData.findAll({
			attributes: ["studentname"],
			raw: true,
		});
		const studentNames = result.map((row) => row.studentname);
		res.json({ studentNames });
	} catch (err) {
		res.status(500).send("Internal Server Error");
		throw err;
	}
};

export const addStudentDataController = async (req, res) => {

	prisma.user
		.create({
			data: {
				name: req.body.name,
				email: req.body.email,
				password: await bcrypt.hash(req.body.password,12),
				contact: req.body.contact,
				role: "student",
				age: req.body.age,
				address: req.body.address,
			},
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log(error);
		});
};
