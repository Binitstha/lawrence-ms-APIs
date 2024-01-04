import express from 'express';
const router=express.Router();
import { validateCode } from './validator.js';
import { forgetPasswordController } from './controller.js';


router.post('/forgetPassword', async (req, res) => {
    forgetPasswordController(req,res);
});

router.post('/resetPassword',(req,res)=>{
    validateCode(req,res);
})

export default router;