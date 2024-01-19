import express from 'express';
import { addStudentDataController, getStudentDataController } from './controller.js';
const router=express.Router();
import multer from 'multer';
const storage=multer.memoryStorage();
const upload=multer({storage: storage});


router.get("/getStudent", async (req, res) => {
    getStudentDataController(req,res);
});

router.post("/addStudent",upload.single('avatar'), async (req, res) => {
    addStudentDataController(req,res);
});
export default router;