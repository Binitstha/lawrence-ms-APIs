import notice from "../../../model/noticeModel.js";
export const getNoticesController = async (req, res) => {
	try {
		const notices = await notice.findAll();
		const response = {
			status: "200",
			data: notices,
			message: "Notices retrived successfully",
		};
		res.status(200).send(response);
	} catch (error) {
		const response = {
			status: 500,
			message: "Internal Error",
			error: error,
		};
		return res.status(500).send(response);
	}
};

export const addNoticeController = async (req, res) => {
	await notice
		.create({
			id: req.body.id,
			header: req.body.header,
			description: req.body.description,
			date: req.body.date,
		})
		.then((data) => {
			const response = {
				status: "200",
				data: data,
				message: "Notice added successfully",
			};
			res.status(200).send(response);
		})
		.catch((error) => {
			const response = {
				status: "500",
				error: error,
				message: "Error notice insersion",
			};
			res.status(500).send(response);
		});
};
