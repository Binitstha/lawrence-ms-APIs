import express from "express";
import user from "../../model/studentModel.js";
const router = express.Router();

router.get('/hithere', (req, res)=>{
	console.log('Hi there');
	return res.send("Hello");
});

// router.get("/getAllStudents", async (req, res) => {
router.get("/getAllStudents", async (req, res) => {
	try {
		const allStudents = await user.findAll();
        console.log(allStudents);
		const response = {
			status: 200,
			data: allStudents,
			message: "All students retrives sucessfully",
		};
		return res.status(200).send(response);
	} catch (error) {
		const response = {
			status: 500,
			message: "Internal Error",
			error: error,
		};
		return res.status(500).send(response);
	}
});

router.post("/addStudent", async (req, res) => {
	await student
		.create({
			id: req.body.id,
			email: req.body.email,
			password: req.body.password,
			name: req.body.name,
			contact: req.body.contact,
			position: req.body.position,
			address: req.body.address,
			age: req.body.age,
			gender: req.body.gender,
		})
		.then((data) => {
			const response = {
				status: 200,
				data: data,
				message: "Student added sucessfully",
			};
			return res.status(200).send(response);
		})
		.catch((error) => {
			return res.status(500).send({
				status: 500,
				error: error,
				message: "Failed to add student",
			});
		});
});

export default router;
