import { Router } from "express";
import { hash } from 'bcrypt';

const router = Router();
import User from '../../../modals/user/userModal.js';

router.post("/register", async (req, res) => {
    try {
        const userInfo = await req.body;

        await User.create({
            // id: Date.now(),
            userName: userInfo.name,
            email: userInfo.email,
            password: await hash(userInfo.password, 10),
            token: userInfo.token,
        });
        res.send("data inserted")
    }

    catch (error) {
        console.error(error);
    }
});

export default router;