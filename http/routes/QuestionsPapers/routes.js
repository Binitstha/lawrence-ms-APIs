import express from 'express';
const router = express.Router();
import { getQuestionsControler, questionDeleteController, questionEntryController } from './controller.js';
import { upload } from './controller.js';


router.use(express.static('./'));
router.put('/questionEntry', upload.single('image'), async (req, res) => {
    questionEntryController(req,res);
})
router.post('/questionDelete', async (req, res) => {
    questionDeleteController(req,res);
})

router.get('/getQuestions',(req,res)=>{
    getQuestionsControler(req,res);
})
export default router;