import express from 'express';
import { getAttendanceController, setAttendanceController } from './controller.js';
const router=express.Router();

router.post('/getAttendance',(req,res)=>{
    getAttendanceController(req,res);
})

router.post('/setAttendance',(req,res)=>{
    setAttendanceController(req,res);
})

export default router;