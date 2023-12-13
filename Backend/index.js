import express from "express";
const app = express();
const port = 3000;
app.use(express.json());

import cors from "cors"
import registerRoute from "./controller/routes/userRegister/register.js";
import forgetRoute from "./controller/routes/forgetPassword/forgetPassword.js";
import resetRoute from "./controller/routes/forgetPassword/codeChecker.js";
import student_dataRoute from "./controller/routes/student_data/student_data.js";
import assignmentRoute from "./controller/routes/assignment/assingmentEntry.js"
import internalmarksRoute from "./controller/routes/internalMarks/internalMarks.js"
import EventsRoute from "./controller/routes/college Events/events.js"
import addEventsRoute from "./controller/routes/college Events/addEvents.js"

app.use(cors())
app.use("/", registerRoute);
app.use("/", forgetRoute);
app.use("/forgetPassword", resetRoute);
app.use("/", student_dataRoute);
app.use("/", assignmentRoute);
app.use("/", internalmarksRoute);
app.use("/", EventsRoute);
app.use("/", addEventsRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
