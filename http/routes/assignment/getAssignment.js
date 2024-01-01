import express from 'express';
import assModel from '../../../modals/assignment/createAssignmentModal.js'; 
const router=express.Router();

router.get('/getAssignments',async (req,res)=>{
    const assignments= await assModel.findAll({
    });
    const response={
        status:'200',
        data:assignments,
        message:'Assignment retrived successfully',
    }
    res.status(200).send(response);
})

export default router;