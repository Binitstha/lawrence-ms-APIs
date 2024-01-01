import express from 'express';
import cors from 'cors';
const app=express();
app.use(express.json());
import dotenv from 'dotenv';
dotenv.config();
app.use(cors());
// import register from './http/routes/register.js';
import signIn from './http/routes/signin.js';
import attendance from './http/routes/attendance.js';
import notices from './http/routes/notices.js';
import assignments from './modals/assignment/addStudentAssignmentModal.js';
import getFullStudents from './http/routes/getFullStudents.js';

import registerRoute from "./http/routes/userRegister/register.js";
import forgetRoute from "./http/routes/forgetPassword/forgetPassword.js";
import resetRoute from "./http/routes/forgetPassword/codeChecker.js";
import studentRoute from "./http/routes/student_data/student.js";
import addStudentRoute from "./http/routes/student_data/addStudent.js";
import assignmentRoute from "./http/routes/assignment/assingmentEntry.js"
import internalmarksRoute from "./http/routes/internalMarks/internalMarks.js"
import EventsRoute from "./http/routes/college Events/getEvents.js"
import addEventsRoute from "./http/routes/college Events/addEvents.js"
import syllabusRoute from "./http/routes/syllabus/syllabus.js"
import questionEntryRoute from "./http/routes/QuestionsPapers/questionEntry.js"
import questionsRoute from "./http/routes/QuestionsPapers/question.js"

app.use("/", registerRoute);
app.use("/", forgetRoute);
app.use("/forgetPassword", resetRoute);
app.use("/", studentRoute);
app.use("/", addStudentRoute);
app.use("/", assignmentRoute);
app.use("/", internalmarksRoute);
app.use("/", EventsRoute);
app.use("/", addEventsRoute);
app.use("/", syllabusRoute);
app.use("/", questionEntryRoute);
app.use("/", questionsRoute);








app.use("/authentication", signIn);
app.use("/",attendance);
app.use('/',notices);
app.use('/',assignments);
app.use('/',getFullStudents);
app.listen(process.env.PORT, () =>
	console.log(`Server running on port:  ${process.env.PORT}`)
);
