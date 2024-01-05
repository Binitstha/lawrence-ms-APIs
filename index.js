import express from 'express';
import cors from 'cors';
const app=express();
app.use(express.json());
import dotenv from 'dotenv';
dotenv.config();
app.use(cors());
// import register from './http/routes/register.js';
// import signIn from './http/routes/auth/signIn/routes.js';
// import attendance from './http/routes/attendance.js';
// import notices from './http/routes/notices.js';
// import assignments from './model/assignment/addStudentAssignmentModel.js';
// import getAllStudents from './http/routes/getFullStudents.js';

// import registerRoute from "./http/routes/auth/register/routes.js";
// import forgetRoute from "./http/routes/forgetPassword/forgetPassword.js";
// import resetRoute from "./http/routes/forgetPassword/codeChecker.js";
// import studentRoute from "./http/routes/student_data/student.js";
// import addStudentRoute from "./http/routes/student_data/addStudent.js";
// import assignmentRoute from "./http/routes/assignment/assingmentEntry.js"
// import internalmarksRoute from "./http/routes/internalMarks/internalMarks.js"
// import EventsRoute from "./http/routes/college Events/getEvents.js"
// import addEventsRoute from "./http/routes/college Events/addEvents.js"
// import syllabusRoute from "./http/routes/syllabus/syllabus.js"
// import questionsRoute from "./http/routes/QuestionsPapers/routes.js"

// app.use("/", registerRoute);
// app.use("/", forgetRoute);
// app.use("/forgetPassword", resetRoute);
// app.use("/", studentRoute);
// app.use("/", addStudentRoute);
// app.use("/", assignmentRoute);
// app.use("/", internalmarksRoute);
// app.use("/", EventsRoute);
// app.use("/", addEventsRoute);
// app.use("/", syllabusRoute);
// app.use("/", questionsRoute);


// app.use("/authentication", signIn);
// app.use("/",attendance);
// app.use('/',getAllStudents);
// app.use('/',notices);
// app.use('/',assignments);


// v2

 


import api from './api.js';
app.use('/api',api);




// Auth
// app.use('/auth',authRoutes);
// app.use('/notices',)


// index.js
// app.use('/api/v1', v1Routes)


// v1routes.js
// app.use('auth',authRoutes)


// v1/auth/controller.js

// export const authController = {
// 	login:(req, res)=>{
// 		console.log('login');
// 	}
// }
// export default authController;
// export default authController;

// v1/auth/service.js
// v1/auth/validator.js
// v1/auth/routes.js

// import controller from './controller';

// app.get('/login', .login)



// exampl.com/login
// example.com/api/v1/auth/login


app.listen(process.env.PORT, () =>
	console.log(`Server running on port:  ${process.env.PORT}`)
);
