import express from 'express';
const router = express.Router();
import { getAssignmentController } from "./controller.js";
// import addAssignmentController from "./controller.js"
import { assignmentCheckController } from "./controller.js";

router.get('/getAssignments', async (req, res) => {
    getAssignmentController(req, res);
})

router.put('/setStudentAssignment', async (req, res) => {
    assignmentCheckController(req, res);
})

// router.post('/addAssignment', async (req, res) => {
//     addAssignmentController(req, res);
// })
export default router;