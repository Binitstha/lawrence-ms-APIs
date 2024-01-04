import { createTransport } from "nodemailer";

import user from "../../../../model/user/userModal.js";


let genratedCode;

export const getEmail = async (req) => {
    return req.body.email;
};

export const forgetPasswordController=async (req,res)=>{
    console.log("forgetRequest");
    let reqEmail = await getEmail(req);
    try {
        const databaseEmail = await user.findAll({
            where: {
                email: reqEmail,
            },
        });

        if (databaseEmail.length > 0 && databaseEmail[0].email) {
            console.log("found");
            res.send("email found");
        }

        await codeGenerator();
        await emailSend();
    } catch (error) {
        console.log(error);
        return res.send("user not found");
    }
}

export const codeGenerator=()=>{
    const codeArray = [];
    for (let i = 0; i < 5; i++) {
        const radNum = Math.floor(Math.random() * 10);
        codeArray.push(radNum);
    }
    try {
        if (codeArray.length == 5) {
            genratedCode = codeArray.reduce(
                (acc, currentNum) => acc * 10 + currentNum,
                0
            );
        }
    } catch (error) {
        throw error;
    }
    return genratedCode;
}



export const emailSend=async ()=>{
    const transporter = createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "2e021b62f3788b",
            pass: "2a86060576a97d",
        },
    });

    const mailOptions = {
        from: "imbinit54@gmail.com",
        to: "binitcr336@gmail.com",
        subject: "Code for forgetted password",
        text: `${genratedCode}
            code for setting new password`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}

