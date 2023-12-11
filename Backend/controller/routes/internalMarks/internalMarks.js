import express from "express";
import internalMarks from "./internalmarksDB.js";
const router = express.Router();

router.get("/internalMarks", async (req, res) => {
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
