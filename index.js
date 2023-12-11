import express from 'express';
import cors from 'cors';
const app=express();
app.use(express.json());
import dotenv from 'dotenv';
dotenv.config();
app.use(cors());
// import register from './http/routes/register.js';
import signIn from './http/routes/signin.js';
import attendance from './http/routes/attendance.js';
import notices from './http/routes/notices.js';
import assignments from './http/routes/assignment.js';
app.use("/authentication", signIn);
// app.use("/authentication", register);
app.use("/",attendance);
app.use('/',notices);
app.use('/',assignments);
app.post("/getData", (req, res) => {
	res.send(req.body);
});
app.listen(process.env.PORT, () =>
	console.log(`Example app listening on port ${process.env.PORT}!`)
);
