import express from 'express';
const router=express.Router();
import { addEventController } from './controller.js';
import { getEventsController } from './controller.js';

router.post('/addEvents', async (req, res) => {
    addEventController(req,res);
});

router.get('/getEvents', async (req, res) => {
    getEventsController(req,res);
})
export default router;