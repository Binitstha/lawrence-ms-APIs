import express from 'express'
import collegeEvents from '../../../modals/events/eventModal.js';
const router = express.Router()

router.post('/getEvents', async (req, res) => {
    try {
         const result = await collegeEvents.findAll({
             raw: true
            })
            res.json(result)
        } catch (err) { throw err }
})

export default router;