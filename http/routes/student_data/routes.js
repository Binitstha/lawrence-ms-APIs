import express from 'express';
import { addStudentDataController, getStudentDataController } from './controller.js';
const router=express.Router();
import multer from 'multer';
import { upload } from './controller.js';

router.get("/getStudent", async (req, res) => {
    getStudentDataController(req,res);
});

router.post("/addStudent", upload.single('photo'), async (req, res) => {
    addStudentDataController(req,res);
});
export default router;