import express from 'express';
import { addNoticeController, getNoticesController } from './controller.js';
const router = express.Router();

router.get('/getNotices', async (req, res) => {
    getNoticesController(req, res);
})
router.post('/addNotice', async (req, res) => {
    addNoticeController(req, res);
})
export default router;