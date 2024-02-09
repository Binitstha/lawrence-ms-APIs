import express from 'express';
const app=express();
import register from "./register/routes.js";
import signIn from "./signIn/routes.js";
import forgetPassword from "./forgotPassword/routes.js";

app.use('/',register);
app.use('/',signIn);
app.use('/',forgetPassword);
export default app;