import express from 'express';
const router = express.Router();
import { getAssignmentController } from "./controller.js";
import { addAssignmentController } from "./controller.js"
import { assignmentCheckController } from "./controller.js";
import { deleteAssignment } from "./controller.js";
import { editAssignment } from "./controller.js";

router.get('/getAssignments', async (req, res) => {
    getAssignmentController(req, res);
})

router.put('/setStudentAssignment', async (req, res) => {
    assignmentCheckController(req, res);
})

router.post('/addAssignment', async (req, res) => {
    addAssignmentController(req, res);
})

router.post('/editAssigment',async(req,res)=>{
    editAssignment(req,res);
})

router.delete('/deleteAssignment',async(req,res)=>{
    deleteAssignment(req,res);
})

export default router;