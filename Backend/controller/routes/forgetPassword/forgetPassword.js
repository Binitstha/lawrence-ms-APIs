import { Router } from "express";
const router = Router();
import { createTransport } from "nodemailer";
import User from "../userRegister/userDB.js";

let genratedCode;

export const getEmail = async (req) => {
    return req.body.email;
};

router.post("/forgetPassword", async (req, res) => {
    let reqEmail = await getEmail(req);

    try {
        const databaseEmail = await User.findAll({
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
        console.log("Email sent");
    } catch (error) {
        console.log(error);
        return res.send("user not found");
    }
    console.log("forget", reqEmail);
});

export function codeGenerator() {
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
    console.log(genratedCode);
    return genratedCode;
}

async function emailSend() {
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

export default router;
