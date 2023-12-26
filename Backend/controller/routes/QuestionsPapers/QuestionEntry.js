import express from 'express'
import questionDB from './QuestionDb.js'
const router = express.Router()

router.get('/questionEntry',async (req, res) => {
    try {
        const userInfo = await req.body;

        await questionDB.create({
            question: userInfo.question,
            year: userInfo.year,
            semester: userInfo.semester,
            subject: userInfo.subject,
        });
        res.send("data inserted")
    }

    catch (error) {
        console.error(error);
        res.send(error)
    }
})

export default router