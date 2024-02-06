// import attModel from "../../../model/attandenceModel.js";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAttendanceController = async (req, res) => {
	// const students = await attModel.findAll({});

	const students = await prisma.user.findMany({
		where: {
			role: "student",
			Student: {
				some: {
					semester_id: req.body.semesterId,
				},
			},
		},
		select:{
			id:true,
			name:true,
		}
	}).catch((err)=>{
		return res.status(501).send({
			status:501,
			error:err,
			message:'Error getting attendance'
		})
	})
	const response = {
		message: "200",
		data: students,
		message: "Attendance retrived successfully",
	};
	return res.status(200).send(response);
};



export const setAttendanceController = async (req, res) => {
	const body = req.body;

	body.forEach(async (item) => {
		// get current attendance count
		const currentUser=await prisma.attendance.findFirst({
			where:{
				id:item.id,
			}
		})

		// update attendance
		await prisma.attendance.update({
			where:{
				id:item.id,
			},
			data:{
				attendance_count:(currentUser.attendance_count+1),
			}
		}).catch((err)=>{
			return res.status(501).send({
				status:501,
				error:err,
				message:'Attendance inserted sucessfully'
			})
		})
		
	});
	return res.status(200).send({
		status:200,
		message:'Error updating attendance'
	})
};
