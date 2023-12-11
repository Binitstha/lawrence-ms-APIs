import express from 'express';
import assModel from '../../models/assignmentModel.js'; 
const router=express.Router();

router.get('/getAssignments',async (req,res)=>{
    const assignments= await assModel.findAll({
    });
    res.status(200).send(assignments);
})

export default router;