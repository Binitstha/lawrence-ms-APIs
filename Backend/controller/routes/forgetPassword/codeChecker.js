const express = require('express');
const User = require('../userRegister/user.js');
const bcrypt = require('bcrypt');

const resetRouter = express.Router();
let codeMatch;

const reqEmail = 'Binit@gmail.com';
const generatedCode = 12345

resetRouter.get('/resetPassword', async (req, res) => {

    const userInfo = req.body;

    if (generatedCode === userInfo.code) {
        res.send('Code matched');
        codeMatch = true;
    } else {
        res.send('Code not matched');
        codeMatch = false;
    }

    try {
        const emaildata = await User.findOne({
            where: {
                email: 'Binit@gmail.com',
            },
        });
        console.log(emaildata.email);
    } catch (err) {
        console.error(err);
        next(err);
    }

    try {
        if (codeMatch) {
            await User.update(
                {
                    password: await bcrypt.hash(userInfo.password, 10),
                },
                {
                    where: {
                        email: reqEmail,
                    },
                }
            );
            console.log("new Password set")
        }
    } catch (err) {
        console.error(err);
    }
});

module.exports = resetRouter;
