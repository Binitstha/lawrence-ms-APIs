import express from "express";
import internalMarks from "../../../modals/internalMarks/internalMarksModal.js";
const router = express.Router();

router.post("/internalMarks", async (req, res) => {
  const userinfo = await req.body;

  try {
    await internalMarks.create({
      studentid: userinfo.studentid,
      semester: userinfo.semester,
      marks: userinfo.marks,
      remark: userinfo.remark,
    });
    res.send("Data inserted");
  } catch (err) {
    console.log(err);
  }

});

export default router;