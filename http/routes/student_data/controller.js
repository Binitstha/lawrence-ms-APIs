// import studentData from "../../../model/students/studentModel.js";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import fs from 'fs/promises'
import { dirname } from 'path';
import path from "path";
import { fileURLToPath } from "url";
import { addUser } from "../user/controller.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


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
	const newStudent=await addUser(req,res);
	// console.log(newStudent);
    const image= req.file;
	const pathToFolder='../user/photo';
	const filename=path.join(__dirname,pathToFolder,"as.jpg");
	await fs.writeFile(filename,image.buffer);
};
