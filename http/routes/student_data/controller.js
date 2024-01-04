import studentData from "../../../model/students/studentModel.js";
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
    const userInfo = await req.body;
    await studentData.create({
        studentName: userInfo.studentname,
        email: userInfo.email,
        semester: userInfo.semester,
        address: userInfo.address,
        phoneNumber: userInfo.phonenumber
    })
    res.send("Data inserted")
};
