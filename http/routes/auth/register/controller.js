import { hash } from 'bcrypt';

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const registerController=async (req,res)=>{
    try {
        const userInfo = await req.body;

        await prisma.user.create({
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
}
export default registerController;