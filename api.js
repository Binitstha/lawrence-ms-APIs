import express from 'express';
import rateLimit from 'express-rate-limit';
import validateToken from './controller/validateToken.js';

const limiter=rateLimit({
    windowMs:1000*60,
    max:60
})
const app=express();


import assignment from './http/routes/assignment/routes.js';
import events from './http/routes/collegeEvents/routes.js'
import internalMarks from './http/routes/internalMarks/routes.js';
import questions from './http/routes/QuestionsPapers/routes.js'
import studentData from './http/routes/student_data/routes.js';
import syllabus from './http/routes/syllabus/routes.js';
import attendance from './http/routes/attendance/routes.js';
import notice from './http/routes/notices/routes.js';
import user from './http/routes/user/routes.js';



app.use(limiter);

app.use('/assignment',assignment);
app.use('/events',events);
app.use('/internalMarks',internalMarks);
app.use('/questions',questions);
app.use('/student',studentData);
app.use('/syllabus',syllabus);
app.use('/attendance',attendance);
app.use('/notice',notice);
app.use('/user',user);



export default app;