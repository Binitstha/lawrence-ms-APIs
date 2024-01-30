import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();
import {signInController,getUserFullDetails} from './controller.js';

router.post("/signIn", async (req, res) => {
	signInController(req,res)
});
router.post("/getFullUserDetails",async(req,res)=>{
	getUserFullDetails(req,res);
})
export default router;