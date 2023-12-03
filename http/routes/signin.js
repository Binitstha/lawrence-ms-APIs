const express=require('express');
require("dotenv").config();
const sql=require('mysql');
const router=express.Router();
const db=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"2319",
    database:"userDatabase",
});
db.connect((error)=>{
    if(error) return error
    console.log('Database active');
});
const getUsersSql="SELECT * FROM users"
router.post('/signIn', (req,res)=>{

    db.query(getUsersSql,(error,result)=>{
        if(error) return console.log(error);
        console.log(result);
        result.forEach((user)=>{
            responseObject.push(user);
        })
    })
    const responseObject=[];
    

    const headrs=btoa(req.header);
    const payload=btoa(req.body);
    console.log(req.body);
    const signature=btoa(headrs+"."+payload+btoa(process.env.SECRET_KEY));
    const token=headrs+"."+payload+"."+signature;
    res.status(200).send(token);
});
module.exports=router;