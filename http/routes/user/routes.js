import express from 'express';
import { addUser, exitUserDetail, getAllStudents, getAllUsers, getUser } from './controller.js';
const router = express.Router();

router.get('/getAllUsers', (req, res) => {
    getAllUsers(req, res);
})

router.post('/addUser', (req, res) => {
    addUser(req, res);
})

router.put('/editUserdetail', (req, res) => {
    exitUserDetail(req, res);
})

router.get('/getAllStudents', (req, res) => {
    getAllStudents(req, res);
})

router.post('/getUser', (req, res) => {
    getUser(req, res);
})
export default router;