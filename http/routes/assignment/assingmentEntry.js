import { Router } from 'express'
import assingmentData from '../../../modals/assignment/addStudentAssignmentModal.js';
const router = Router()
const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const date = new Date;
router.post('/setStudentAssignment', async (req, res) => {
    const userinfo = await req.body;

    userinfo.forEach(async (element) => {
        if (element.check) {

            try {
                await assingmentData.create({
                    studentid: element.studentid,
                    studentname: element.studentname,
                    Submissiondate: date.getFullYear() + "/" + month[date.getMonth()] + "/" + date.getDate()
                })
                res.send("data inserted!")
            } catch (err) {
                console.log(err)
                res.send("Date insertion failed")
            }

        }
    })
})

export default router;