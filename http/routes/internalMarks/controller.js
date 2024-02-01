import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const internalMarksController=async (req,res)=>{
    const userinfo = await req.body;

    try {
      await prisma.internalMarks.create({
        studentid: userinfo.studentid,
        semester: userinfo.semester,
        marks: userinfo.marks,
        remark: userinfo.remark,
      });
      res.send("Data inserted");
    } catch (err) {
      console.log(err);
    }
}