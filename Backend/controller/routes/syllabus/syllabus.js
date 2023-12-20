import SyllabusData from "./syllabusDB.js";
import { Router } from "express";

const router = Router()
router.post('/syllabus', async (req, res) => {
    try {
        const bodyData = await req.body
        for(const element of bodyData){
            const status = (element.status) ? "complete" : "incomplete"
            await SyllabusData.create({
                Subjectcode: element.Subjectcode,
                chapterId: element.chapterid,
                status: status
            })
        };
            const response = {
                "status": "200",
                "message": "Syllabus entry is completed"
            }
            res.send(response)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

export default router