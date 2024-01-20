import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { addUser } from "../user/controller.js";

const prisma = new PrismaClient();

import path, { dirname, join } from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/images/studentImage")
	},
	filename: (req, file, cb) => {
		console.log(file)
		cb(null, Date.now() + path.extname(file.originalname))
	}
})
export const upload = multer({ storage: storage });

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
	if (
		await prisma.user.findFirst({
			where: {
				email: req.body.email,
			},
		})
	) {
		return res.status(403).send({
			status: 403,
			error: "Email already in use",
			message: "Email already in use",
		});
	}

	try {
		const body = await req.body
		const image = req.file ? req.file.path : null
		const result = await prisma.user.create({
			data: {
				name: body.name,
				password: await bcrypt.hash(body.password, 12),
				contact: body.contact,
				email: body.email,
				address: body.address,
				age: body.age,
				role: body.role,
				gender: body.gender,
				// semester: body.semester,
				photo: image,
			}
		})
		res.status(200).send("data inserted")
	} catch (err) {
		console.error(err)
		res.status(500).send("Internal server error")
	}
};
