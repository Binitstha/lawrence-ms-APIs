import express from 'express';
import cors from 'cors';
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
import dotenv from 'dotenv';
dotenv.config();
app.use(cors());



import api from './api.js';
app.use('/api',api);





app.listen(process.env.PORT, () =>
	console.log(`Server running on port:  ${process.env.PORT}`)
);
