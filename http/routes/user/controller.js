// import user from "../../../model/user.js";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllUsers = async (req, res) => {
	await prisma.user
		.findMany({
			include: {},
		})
		.then((data) => {
			return res.status(200).send({
				status: 200,
				data: data,
				message: "Students retrived sucessfully",
			});
		})
		.catch((error) => {
			return res.status(500).send({
				status: 500,
				error: error,
				message: "Retriving students failed",
			});
		});
};

export const addUser = async (req, res) => {
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
	console.log(req.body);
	await prisma.user
		.create({
			data: {
				name: req.body.name,
				email: req.body.email,
				password: await bcrypt.hash(req.body.password, 12),
				contact: req.body.contact,
				role: req.body.role,
				age: req.body.age,
				address: req.body.address,
				gender: req.body.gender,
				photo: req.body.photo
			},
		})
		.then((data) => {
			res.status(200).send({
				status: 200,
				data: data,
				message: "User added sucessfully",
			});
			console.log('addded');
			return {
				status: 200,
				data: data,
				message: "User added sucessfully",
			};
		})
		.catch((error) => {
			res.status(500).send({
				status: 500,
				error: error,
				message: "User creation unsucessful",
			});
			return {
				status: 500,
				error: error,
				message: "User creation unsucessful",
			};
		});
};

export const getAllStudents = async (req, res) => {
	await prisma.user
		.findMany({
			where: {
				role: "student",
			},
			include:{
				Student:{
					select:{
						semester_id:true,
					}
				}
			}
		}) 
		.then((data) => {
			// map data to remove password
			const pwRemovedData=data.map((item)=>{
				const {password,...pwRemovedData}=item;
				return pwRemovedData;
			})
			console.log(pwRemovedData);
			return res.status(200).send({
				status: 200,
				data: pwRemovedData,
				message: "Students retrived sucessfully",
			});
		})
		.catch((error) => {
			return res.status(500).send({
				status: 500,
				error: error,
				message: "Retriving students failed",
			});
		});
};


export const getUser = async (req, res) => {
	await prisma.user
		.findFirst({
			where: {
				id: req.body.id,
			},
		})
		.then((user) => {
			// remove password from json
			const { password, ...responsedata } = user;

			return res.status(200).send({
				status: 200,
				data: responsedata,
				message: "User retrived sucessfully",
			});
		})
		.catch((error) => {
			return res.status(500).send({
				status: 500,
				error: error,
				message: "Internal server error",
			});
		});
};

export const exitUserDetail = async (req,res)=>{
	console.log(req.body)
}