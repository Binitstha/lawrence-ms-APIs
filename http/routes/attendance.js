import express from 'express';
const router=express.Router();
import attModel from '../../models/attandenceModel.js';
import setAttendance from '../../controller/attendanceSetter.js';
router.post('/setAttendance',(req,res)=>{
      console.log(req.body);
      setAttendance(req)?res.status(200).send('Error in insersion'):res.send('Inserted successfully');
      
})
router.get('/getAttendance',async (req,res)=>{
      const students=await attModel.findAll({
      });
      res.status(200).send(students);
})
export default router;