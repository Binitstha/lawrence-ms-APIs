import attModel from "../../../model/attandenceModel.js";

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
	});

	
	const response = {
		message: "200",
		data: students,
		message: "Attendance retrived successfully",
	};
	res.status(200).send(response);
};

export const setAttendanceController = async (req, res) => {
	const body = req.body;

	body.forEach(async (item) => {
		try {
			const student = await attModel.findOne({ where: { email: item.email } });
			if (item.present) {
				attModel.update(
					{ pCount: student.pCount + 1 },
					{
						where: {
							email: student.email,
						},
					}
				);
			}
			return res.status(500).send({
				status: "500",
				data: "",
				message: "Unable to set attendance",
			});
		} catch (error) {
			res.status(200).send({
				status: "200",
				data: "",
				message: "Assignment set successfull",
			});
			return error;
		}
	});
};
