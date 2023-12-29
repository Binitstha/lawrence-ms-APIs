import express from 'express'
import questionDB from './QuestionDb.js'
const router = express.Router()

router.put('/questionEntry',async (req, res) => {
    try {
        const userInfo = await req.body;

        await questionDB.create({
            question: userInfo.question,
            year: userInfo.year,
            semester: userInfo.semester,
            subject_code: userInfo.subject_code,
            mark : userInfo.mark,
        });
        res.send("data inserted")
    }

    catch (error) {
        console.error(error);
        res.send(error)
    }
})
router.post('/questionDelete',async (req, res) => {
    try {
        const userInfo = await req.body;

        await questionDB.destroy({
            where:{
                    question: userInfo.question,
                    year: userInfo.year,
                    semester: userInfo.semester,
                    subject_code: userInfo.subject_code,
                    mark : userInfo.mark
            }
        });
        res.send("Deleted")
    }

    catch (error) {
        console.error(error);
        res.send(error)
    }
})

export default router