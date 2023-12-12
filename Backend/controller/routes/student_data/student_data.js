import { Router } from "express"
import internalMarks from "../internalMarks/internalmarksDB.js";
import studentData from "./student.js";
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
    try {
        console.log(studentData.findAll().toString());
    
        const result = await studentData.findAll({
          attributes: ['studentname'],
          raw: true
        });
        const studentNames = result.map((row) => row.studentname);
        res.json({studentNames})
      } catch (err) {
        res.status(500).send('Internal Server Error');
        throw err
      }
});

export default router;