import express from 'express'
import requlize from 'sequelize';
const app = express();
const router= express.Router();
const port = 3000;

router.post('/registerUser',(req,res)=>{
    res.send('post request');
})

export default router;