import { internalMarksController } from "./controller.js";
import express from 'express';
const router=express.Router();

router.post("/addInternalMarks", async (req, res) => {
 
    internalMarksController(req,res);
});
export default router;