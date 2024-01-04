import express from 'express';
const router=express.Router();
import { getAssignmentController } from "./controller.js";
import { assignmentEntryController } from "./controller.js";
router.get('/getAssignments',async (req,res)=>{
    getAssignmentController(req,res);
})



router.post('/setStudentAssignment', async (req, res) => {
    assignmentEntryController(req,res);
})
export default router;