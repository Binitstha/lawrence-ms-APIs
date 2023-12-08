import express from "express";
const app = express();
const port = 3000;
app.use(express.json());

// import registerRoute from "./controller/routes/userRegister/register.js";
// import forgetRoute from "./controller/routes/forgetPassword/forgetPassword.js";
// import resetRoute from "./controller/routes/forgetPassword/codeChecker.js";
import student_dataRoute from "./controller/routes/student_data/student_data.js";

// app.use("/", registerRoute);
// app.use("/", forgetRoute);
// app.use("/forgetPassword", resetRoute);
app.use("/", student_dataRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
