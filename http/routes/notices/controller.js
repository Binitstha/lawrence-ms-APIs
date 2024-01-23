// import notice from "../../../model/noticeModel.js";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getNoticesController = async (req, res) => {
	
	try {
		const notice=await prisma.notice.findMany();
		const response= {
			status:'200',
			data:notice,
			message:'notice retrived sucessfully'
		}
		return res.status(200).send(response);
	} catch (error){
		const response={
			status: "500",
			error: error,
			message: "Server error",
		}
		return res.status(500).send(response);
	}
};

export const addNoticeController = async (req, res) => {
	try {

		const notice = await prisma.notice.create({
			data: {
				title: req.body.title,
				description: req.body.description,
				date: new Date(Date.now() + 20700000), // +offset
			},
		});
		const response = {
			status: "200",
			data: notice,
			message: "Notice inserserted scucessfully",
		};
		return res.status(200).send(response);
	} catch (error) {
		console.error(error);
		return res.status(500).send({
			status:'500',
			error:error,
			message:'Could not add notice',
		});
	}
};
