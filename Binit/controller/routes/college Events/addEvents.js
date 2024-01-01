import express from 'express'
import collegeEvents from './eventDB.js'
const router = express.Router()

router.post('/addEvents', async (req, res) => {
    const userinfo = await req.body;
    try {
        await collegeEvents.create({
            events: userinfo.events,
            eventDesc: userinfo.eventdesc,
            date: userinfo.date,
            venue: userinfo.venue
        })
        res.send("data inserted")
    } catch (err) {
        console.log(err)
        res.send("Data insertion falied")
    }
})

export default router