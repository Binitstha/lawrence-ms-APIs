import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();
import signInController from './controller.js';

router.post("/signIn", async (req, res) => {
	signInController(req,res)
});
export default router;