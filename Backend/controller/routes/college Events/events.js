import express from 'express'
import collegeEvents from './eventDB.js'
const router = express.Router()

router.post('/events', async (req, res) => {
    try {
         const result = await collegeEvents.findAll({
             raw: true
            })
            res.json(result)
        } catch (err) { throw err }
})

export default router