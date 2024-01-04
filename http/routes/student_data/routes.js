import express from 'express';
import { addStudentDataController, getStudentDataController } from './controller.js';
const router=express.Router();



router.get("/getStudentData", async (req, res) => {
    getStudentDataController(req,res);
});

router.post("/addStudentData", async (req, res) => {
    addStudentDataController(req,res);
});
export default router;