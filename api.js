import express from 'express';
const app=express();

import auth from './http/routes/auth/auth.js';
import assignment from './http/routes/assignment/routes.js';
import events from './http/routes/collegeEvents/routes.js'
import internalMarks from './http/routes/internalMarks/routes.js';
import questions from './http/routes/QuestionsPapers/routes.js'
import studentData from './http/routes/student_data/routes.js';
import syllabus from './http/routes/syllabus/routes.js';
import attendance from './http/routes/attendance/routes.js';
import notice from './http/routes/notices/routes.js';

app.use('/auth',auth);
app.use('/assignment',assignment);
app.use('/events',events);
app.use('/internalMarks',internalMarks);
app.use('/questions',questions);
app.use('/studentData',studentData);
app.use('/syllabus',syllabus);
app.use('/attendance',attendance);
app.use('/notice',notice);

export default app;