const express = require("express");
const app = express();
const port = 3000;

const registerRoute = require("./controller/routes/userRegister/register.js");
const forgetRoute = require("./controller/routes/forgetPassword/forgetPassword.js");
const resetRoute = require("./controller/routes/forgetPassword/codeChecker.js");

app.use(express.json());
app.use("/", registerRoute);
app.use("/", forgetRoute);
app.use("/", resetRoute);

const sequelize = require("./config/config");
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
