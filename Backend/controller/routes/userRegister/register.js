import { Router } from "express";
import mysql from 'mysql';
import { hash } from 'bcrypt';

const router = Router();
const port = 3000;
import User from './user.js';

router.post("/register", async (req, res) => {
    try {
        const userInfo = req.body;

        await User.create({
            id: Date.now(),
            email: userInfo.email,
            password: await hash(userInfo.password, 10),
            token: userInfo.token,
        });
        console.log("hello1")
    }

    catch (error) {
        console.error(error);
    }
    res.send("hello");
});

export default router;