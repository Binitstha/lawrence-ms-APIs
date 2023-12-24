import  {Router}  from 'express';
const router=Router();
import user from "../../models/user.js";


router.get('/getAllStudents',async (req,res)=>{
    try{
        const allStudents= await user.findAll({});
        const response={
        status:200,
        data:allStudents,
        message:'All students retrives sucessfully',
    }
    return res.status(200).send(response);
}catch(error){
    const response={
        status:500,
        message:'Internal Error',
        error:error,
    }
    return res.status(500).send(response);
}
});

export default router;