import { Router } from 'express';
// import findOne from '../../http/routes/userRegister/userDB.js';
// import update from '../../http/routes/userRegister/userDB.js';
import { hash } from 'bcrypt';

import { codeGenerator } from './forgetPassword.js';
import { getEmail } from './forgetPassword.js';
import User from '../../../modals/user/userModal.js';

const resetRouter = Router();
let codeMatch;

resetRouter.get('/resetPassword', async (req, res) => {
    let reqEmail = await getEmail(req)

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
