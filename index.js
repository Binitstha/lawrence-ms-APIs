const express = require('express')
const app = express()
const route = require('./register.js');
const port = 3000
app.use(express.json());
app.use('/', route)

const sequelize = require("./config/config")
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
