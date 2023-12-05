const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();
const User = require('../userRegister/user.js');
const nodemailer = require('nodemailer');

router.post('/forgetPassword', async (req, res) => {
    const userInfo = req.body;
    const reqEmail = userInfo.email;

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

        const codeArray = []
        let code
        for (let i = 0; i < 5; i++) {
            const radNum = Math.floor(Math.random() * 10)
            codeArray.push(radNum)
        }
        try {
            if (codeArray.length == 5) {
                code = codeArray.reduce((acc, currentNum) => acc * 10 + currentNum, 0)
            }
        } catch (error) {
            throw error
        }

        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "2e021b62f3788b",
                pass: "2a86060576a97d"
            }
        });

        const mailOptions = {
            from: 'imbinit54@gmail.com',
            to: 'binitcr336@gmail.com',
            subject: 'Code for forgetted password',
            text: `${code}
             code for setting new password`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });


    } catch (error) {
        console.log(error);
        return res.send("user not found")
    }
})

module.exports = router;