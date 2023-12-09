import { Router } from 'express'
import assingmentData from './assingment.js';
const router = Router()

const date = new Date;
router.get('/assignment', async (req, res) => {
    try {
        const userinfo = await req.body;

        await assingmentData.create({
            studentid: 2,
            studentname: userinfo.sname,
            Submissiondate: date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay()
        })
        res.send("data inserted!")
    } catch (err) {
        console.log(err)
        res.send("Date insertion failed")
    }
})

export default router