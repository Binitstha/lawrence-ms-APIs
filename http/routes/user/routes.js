import express from 'express';
import user from '../../../model/user.js';
import { addUserController, getAllusersController } from './controller.js';
const router=express.Router();

router.get('/getAllUsers',(req,res)=>{
    getAllusersController(req,res);
})

router.post('/addUser',(req,res)=>{
    addUserController(req,res);
})
export default router;