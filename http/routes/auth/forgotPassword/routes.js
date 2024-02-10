import express from 'express';
const router = express.Router();
import { resetPassword } from './controller.js';
import { emailChecker } from './controller.js';

router.post('/emailCheck', async (req, res) => {
    emailChecker(req, res)
})

router.post('/resetPassword', async (req, res) => {
    resetPassword(req, res);
});

// router.post('/resetPassword',(req,res)=>{
//     validateCode(req,res);
// })

export default router;