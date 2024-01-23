import express from 'express';
import { addStudentDataController } from './controller.js';
const router=express.Router();
import multer from 'multer';
import { upload } from './controller.js';

router.post("/addStudent", upload.single('photo'), async (req, res) => {
    addStudentDataController(req,res);
});
export default router;