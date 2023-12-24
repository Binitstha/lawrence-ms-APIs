import attModel from "../models/attandenceModel.js";
function setAttendance(req) {
	const body = req.body;
	body.forEach(async (item) => {
		try {
			const student = await attModel.findOne({ where: { email: item.email } });
			if(item.present){
            attModel.update(
				{ pCount: (student.pCount + 1) },
				{
					where: {
						email: student.email,
					},
				}
			);
            }
		} catch (error) {
            return error;
        }
	});
}
export default setAttendance;
