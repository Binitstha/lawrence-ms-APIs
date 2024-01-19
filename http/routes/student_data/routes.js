import express from 'express';
import { addStudentDataController, getStudentDataController } from './controller.js';
const router=express.Router();



router.get("/getStudent", async (req, res) => {
    getStudentDataController(req,res);
});

router.post("/addStudent", async (req, res) => {
    addStudentDataController(req,res);
});
export default router;