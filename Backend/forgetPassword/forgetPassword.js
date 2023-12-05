const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();
const User = require('../userRegister/user.js');

router.post('/forgetPassword', async (req, res) => {
    const userInfo = req.body;
    const reqEmail = userInfo.email

    try {
        const databaseEmail = await User.findAll({
            where: {
                email: reqEmail
            }
        })

        if (databaseEmail[0].email) {
            console.log("found")
            res.send("email found")
        }

    } catch (error) {
        console.log(error);
        return res.send("user not found")
    }
})









module.exports = router;


