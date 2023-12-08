import express from 'express';
import notice from '../../models/noticeModel.js';
const router=express.Router();

router.get('/getNotices',async (req,res)=>{
    const notices=await notice.findAll();
    res.status(200).send(notices);
})

export default router;