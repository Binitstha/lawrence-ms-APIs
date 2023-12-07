import express from 'express';
const app=express();
app.use(express.json());
// require("dotenv").config();
import dotenv from 'dotenv';
dotenv.config();
import register from './http/routes/register.js';
import signIn from './http/routes/signin.js';
import attandence from './http/routes/attandence.js';
app.use("/authentication", signIn);
app.use("/authentication", register);
app.use("/",attandence);

app.post("/getData", (req, res) => {
	res.send(req.body);
});
app.listen(process.env.PORT, () =>
	console.log(`Example app listening on port ${process.env.PORT}!`)
);
