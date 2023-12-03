const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const register = require("./http/routes/register.js");
const signIn = require("./http/routes/signin.js");
app.use("/authentication", signIn);
app.use("/authentication", register);

app.post("/getData", (req, res) => {
	res.send(req.body);
});
app.listen(process.env.PORT, () =>
	console.log(`Example app listening on port ${process.env.PORT}!`)
);
