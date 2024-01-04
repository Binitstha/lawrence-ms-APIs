import questionDB from '../../../model/questions/questionModel.js';

import path, { dirname, join } from 'path'; // Import 'dirname' and 'join' from the 'path' module
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
export const upload = multer({ storage: storage });



export const questionEntryController=async (req,res)=>{
    const userInfo = await req.body;
    console.log("file", req.file)
    // const imageBuffer = req.file ? fs.readFileSync(req.file.path) : null
    const imageBuffer = req.file.path
    console.log(imageBuffer)
    try {
        await questionDB.create({
            question: userInfo.question,
            year: userInfo.year,
            semester: userInfo.semester,
            subject_code: userInfo.subject_code,
            mark: userInfo.mark,
            image: imageBuffer
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
}


export const questionDeleteController=async (req,res)=>{
    try {
        const userInfo = await req.body;

        const result = await questionDB.destroy({
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


export const getQuestionsControler=async (req,res)=>{
    try {
        const result = await questionDB.findAll();
        res.send(result);
    } catch (err) {
        res.send(err);
    }
} 