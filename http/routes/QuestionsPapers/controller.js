import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import path, { dirname, join } from 'path'; // Import 'dirname' and 'join' from the 'path' module
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images/questionImage")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
export const upload = multer({ storage: storage });

export const questionEntryController = async (req, res) => {
    const userInfo = await req.body;
    console.log(userInfo);
    console.log("file", req.file)
    const imageBuffer = req.file ? req.file.path : null
    // const imageBuffer = req.file.path
    console.log(imageBuffer)
    try {
        const data = await prisma.question.create({
            data: {
                question: userInfo.question,
                year: userInfo.year,
                semester: userInfo.semester,
                subject_code: userInfo.subject_code,
                mark: userInfo.mark,
                image: imageBuffer
            }
        });
        console.log(data)
        res.status(200).send("data inserted")
    }

    catch (error) {
        if (error.code == 'P2002') {
            console.error('Duplicate entry error:', error.message);
            res.status(400).json({ error: 'Duplicate entry error', message: error.message });
        }
        else {
            console.error('Error:', error.message);
            console.log("error code", error.code)
            res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
        console.log(error)
    }
}

export const questionDeleteController = async (req, res) => {
    const userInfo = await req.body;
    try {

        const result = await prisma.question.deleteMany({
            where: {
                question: userInfo.question,
                year: userInfo.year,
                semester: userInfo.semester,
                subject_code: userInfo.subject_code,
                mark: userInfo.mark,
            }
        });
        if (result === 0) {
            res.status(404).send("Data not found");
        }
        else {
            res.status(200).send("Deleted")
        }
    }

    catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const getQuestionsControler = async (req, res) => {
    try {
        const result = await prisma.question.findMany();
        res.send(result);
    } catch (err) {
        console.error(err)
        res.status(500).send(err);
    }
}
// Close Prisma client when the script exits
process.on('beforeExit', async () => {
    await prisma.$disconnect();
});

// Close Prisma client on unhandled exceptions
process.on('uncaughtException', async (err) => {
    console.error('Uncaught Exception:', err);
    await prisma.$disconnect();
    process.exit(1);
});

// Close Prisma client on process termination
process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
});

// Close Prisma client on process termination for Windows
process.on('SIGTERM', async () => {
    await prisma.$disconnect();
    process.exit(0);
});