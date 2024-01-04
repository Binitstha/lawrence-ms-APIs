import express from 'express';
const app=express();

import auth from './http/routes/auth/auth.js';
import assignment from './http/routes/assignment/routes.js';
import events from './http/routes/collegeEvents/routes.js'
import internalMarks from './http/routes/internalMarks/routes.js';
import questions from './http/routes/QuestionsPapers/routes.js'

app.use('/auth',auth);
app.use('/assignment',assignment);
app.use('/events',events);
app.use('/internalMarks',internalMarks);
app.use('/questions',questions);
export default app;