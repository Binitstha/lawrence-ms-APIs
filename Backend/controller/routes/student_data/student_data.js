import { Router } from "express"
import studentData from "./student.js";
const router = Router();

router.get("/studentData", async (req, res) => {
    const userInfo = await req.body;
    await studentData.create({
        id: Date.now(),
        studentName: userInfo.studentName,
        email: userInfo.email,
        semester: userInfo.semester,
        address: userInfo.address,
        phoneNumber: userInfo.phoneNumber
    })
    res.send("Data inserted")
});

export default router;
