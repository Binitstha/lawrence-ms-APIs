import express from 'express'
import questionDB from './QuestionDb.js'
const router = express.Router()

router.get('/questions', async (req, res) => {
    try {
        const result = await questionDB.findAll()
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})
export default router