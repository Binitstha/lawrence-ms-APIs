import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { addUser } from "../user/controller.js";

const prisma = new PrismaClient();

import path, { dirname, join } from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/images/studentImages");
	},
	filename: (req, file, cb) => {
		// console.log(file);
		cb(null, Date.now() + path.extname(file.originalname));
	}
})
export const upload = multer({ storage: storage });

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
		addToAttendanceSheet(result);
		res.status(200).send({
			status: 200,
			message: "Student data inserted successfully",
		})
	} catch (err) {
		console.error(err)
		res.status(500).send("Internal server error")
	}
};

const addToAttendanceSheet=async (data)=>{
	await prisma.attendance.create({
		data:{
			id:data.id,
			attendance_count:0
		}
	})
}
