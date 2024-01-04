import express from 'express'
import { addSyllabusController, getSyllabusController } from './controller.js';
const router=express.Router();

router.post('/updateSyllabusProgress', async (req, res) => {
    addSyllabusController(req,res);
})
router.get('/getSyllabus', async (req, res) => {
    getSyllabusController(req,res);
})


export default router;