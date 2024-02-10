import { createTransport } from "nodemailer";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const emailChecker = async (req, res) => {
    const result = await req.body

    const user = await prisma.user.findFirst({
        where: {
            email: result.email
        }
    })
    if (user) {

        console.log(result)
        res.status(200).send({ "result": result, message: "Email found" })
        const transporter = createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "2e021b62f3788b",
                pass: "2a86060576a97d",
            },
        });
        const payload = JSON.stringify({
            id: user.id,
            email: user.email,
        });
        const secretKey = process.env.SECRET_KEY;
        const token = jwt.sign(payload, secretKey);

        storeToken(user, token)

        const resetLink = `http://localhost:4321/forgotPassword/resetPassword?token=${token}`;

        transporter.sendMail({
            from: 'binitcr336@gmail.com',
            to: "imbinit54@gmail.com",
            subject: 'Password Reset',
            html: `Click <a href="${resetLink}">here</a> to reset your password.`
        }, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).send('Error sending email');
            } else {
                console.log('Email sent:', info.response);
                res.send('Password reset email sent');
            }
        });
    }
    else {
        res.send({
            status: "500",
            message: "Email not found",
        });
    }
}

const storeToken = async (user, token) => {
    if (
        prisma.resetPassToken.findFirst({
            where: {
                id: user.id,
            }
        })) {
        return await prisma.resetPassToken.update({
            data: {
                token: token,
            },
            where: {
                id: user.id
            }
        })
    }
    return await prisma.resetPassToken.create({
        data: {
            id: user.id,
            token: token,
        },
    });
}

export const resetPassword = async (req, res) => {
    console.log("forgetRequest");
    const password = await req.body.password;
    const token = await req.headers.authorization.split(' ')[1]
    const secretKey = process.env.SECRET_KEY
    const decodedToken = jwt.verify(token, secretKey)
    const userEmail = decodedToken.email
    const userId = decodedToken.id
    try {

        prisma.user.update({
            data: {
                password: await bcrypt.hash(password, 12),
            },
            where: {
                id: userId,
                email: userEmail
            }
        }).then(data => {
            res.send({
                status: 200,
                data: data,
                message: "Password reset successfully"
            })
        })
    }
    catch (err) {
        res.status(500).send({
            status: 500,
            message: "Failed"
        })
    }
}