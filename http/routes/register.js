const  express = require('express')
const sqlize= require('sequelize');
const app = express();
const router= express.Router();
const port = 3000;

router.post('/registerUser',(req,res)=>{
    res.send('post request');
})

module.exports=router;