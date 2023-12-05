const express = require('express')
const app = express()
const registerRoute = require('./userRegister/register.js');
const forgetRoute = require('./forgetPassword/forgetPassword.js')
const port = 3000
app.use(express.json());
app.use('/', registerRoute)
app.use('/', forgetRoute)


const sequelize = require("./config/config")
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
