import user from '../../../../model/user/userModal.js';
import { hash } from 'bcrypt';
import { codeGenerator } from './controller.js';
export const validateCode=async(req)=>{
    console.log("validatorRequest");
    const userInfo = req.body;
    if (codeGenerator() === await userInfo.code) {
        res.send('Code matched');
        codeMatch = true;
    } else {
        res.send('Code not matched');
        codeMatch = false;
    }
    
    try {
        const emaildata = await user.findOne({
            where: {
                email: reqEmail,
            },
        });
    } catch (err) {
        console.error(err);
    }
    
    try {
        if (codeMatch) {
            await user.update(
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
    }