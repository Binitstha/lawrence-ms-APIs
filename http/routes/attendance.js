import express from 'express';
const router=express.Router();
import attModel from '../../modals/attandenceModel.js';
import setAttendance from '../../controller/attendanceSetter.js';
router.post('/setAttendance',(req,res)=>{

      setAttendance(req)?
      res.status(500).send({
        status:'500',
        data:'',
        message:'Unable to set attendance',
      }):
      res.status(200).send({
            status:'200',
            data:'',
            message:'Assignment set successfull',
      });
      
})
router.get('/getAttendance',async (req,res)=>{
      const students=await attModel.findAll({
      });
      const response={
            message:'200',
            data:students,
            message:"Attendance retrived successfully",
      }
      res.status(200).send(response);
})
export default router;