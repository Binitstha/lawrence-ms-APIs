import express from 'express';
import notice from '../../models/noticeModel.js';
const router=express.Router();

router.get('/getNotices',async (req,res)=>{
    const notices=await notice.findAll();
    const response={
        status:'200',
        data:notices,
        message:'Notices retrived successfully',
    }
    res.status(200).send(response);
})

export default router;