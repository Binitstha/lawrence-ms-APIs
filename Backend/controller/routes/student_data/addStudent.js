import { Router } from "express"
import studentData from "./studentDB.js";
const router = Router();

router.get("/studentData", async (req, res) => {
    const userInfo = await req.body;
    await studentData.create({
        studentName: userInfo.studentname,
        email: userInfo.email,
        semester: userInfo.semester,
        address: userInfo.address,
        phoneNumber: userInfo.phonenumber
    })
    res.send("Data inserted")
});

export default router;