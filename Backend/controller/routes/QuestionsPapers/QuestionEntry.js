import express from 'express'
import { fileURLToPath } from 'url';
import questionDB from './QuestionDb.js'
import path, { dirname, join } from 'path'; // Import 'dirname' and 'join' from the 'path' module
import multer from 'multer';
import fs from 'fs';
import cors from 'cors'

const router = express.Router()
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

router.use(cors())
const upload = multer({ storage: storage })

router.put('/questionEntry',upload.single('image'), async (req, res) => {
    const userInfo = await req.body;
    console.log("file",req.file)
    const imageBuffer = req.file? fs.readFileSync(req.file.path):null
    try {
        await questionDB.create({
            question: userInfo.question,
            year: userInfo.year,
            semester: userInfo.semester,
            subject_code: userInfo.subject_code,
            mark : userInfo.mark,
            image : imageBuffer
        });
        res.status(200).send("data inserted")
    }
    
    catch (error) {
         if (error.parent.code == 'ER_DUP_ENTRY') {
            console.error('Duplicate entry error:', error.message);
            res.status(400).json({ error: 'Duplicate entry error', message: error.message });
          } 
          else {
            console.error('Error:', error.message);
            console.log("error code", error.code)
            res.status(500).json({ error: 'Internal Server Error', message: error.message });
          }
    }
})
router.post('/questionDelete', async (req, res) => {
    try {
        const userInfo = await req.body;

        await questionDB.destroy({
            where: {
                question: userInfo.question,
                year: userInfo.year,
                semester: userInfo.semester,
                subject_code: userInfo.subject_code,
                mark: userInfo.mark,
            }
        });
        res.status(200).send("Deleted")
    }

    catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
})

export default router