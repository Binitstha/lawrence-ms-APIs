import { Router } from 'express';
import findOne from '../userRegister/user.js';
import update from '../userRegister/user.js';
import { hash } from 'bcrypt';

import { codeGenerator } from './forgetPassword.js';
import { getEmail } from './forgetPassword.js';
import User from '../userRegister/user.js';

console.log(codeGenerator())
const resetRouter = Router();
let codeMatch;

resetRouter.get('/resetPassword', async (req, res) => {
    let reqEmail = await getEmail(req)
    console.log("ahahahahhah", reqEmail)

    const userInfo = req.body;
    if (codeGenerator() === await userInfo.code) {
        res.send('Code matched');
        codeMatch = true;
    } else {
        res.send('Code not matched');
        codeMatch = false;
    }

    try {
        const emaildata = await User.findOne({
            where: {
                email: reqEmail,
            },
        });
        console.log(emaildata.email);
    } catch (err) {
        console.error(err);
    }

    try {
        if (codeMatch) {
            await User.update(
                {
                    password: await hash(userInfo.password, 10),
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

export default resetRouter;
