import cors from 'cors'
import express from 'express'
import questionDB from '../../../model/questions/questionModel.js';
const router = express.Router()

router.use(express.static('./'))
router.use(cors())

router.get('/questions', async (req, res) => {
    try {
        const result = await questionDB.findAll()
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})
export default router