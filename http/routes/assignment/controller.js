import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// import assModel from "../../../model/assignment/createAssignmentModel.js";

export const getAssignmentController = async (req, res) => {
    try {
        const assignments = await prisma.assignment.findMany();
        const response = {
            status: '200',
            data: assignments,
            message: 'Assignment retrived successfully',
        }
        res.status(200).send(response);
    } catch (err) {
        console.error(err)
        const response = {
            status: '500',
            data: assignments,
            message: 'Server error',
        }
        res.status(500).send(response)
    }
}

// import assingmentData from '../../../model/assignment/addStudentAssignmentModel.js';
export const assignmentCheckController = async (req, res) => {
    const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    const userinfo = await req.body;

    userinfo.forEach(async (element) => {
        if (element.check) {

            try {
                await assingmentData.create({
                    studentid: element.studentid,
                    studentname: element.studentname,
                    Submissiondate: date.getFullYear() + "-" + month[date.getMonth()] + "-" + date.getDate()
                })
                res.send("data inserted!")
            } catch (err) {
                console.log(err)
                res.send("Date insertion failed")
            }

        }
    })
}
export const addAssignmentController = async (req, res) => {
    const date = new Date();
    const body = await req.body
    if (await prisma.assignment.findFirst({
        where: {
            title: body.title,
            description: body.Description
        }
    })) {
        return res.status(403).send({ message: "Duplicate entry" })
    }
    else {
        try {
            const result = await prisma.assignment.create({
                data: {
                    semester: body.semester,
                    title: body.Title,
                    description: body.Description,
                    assignedDate: date.getFullYear() + "/" + date.getMonth() + 1 + "/" + date.getDate(),
                    dueDate: body.Date
                }
            })
            res.status(200).send({ message: "Data inserted" });
        } catch (err) {
            console.log(err);
            res.status(500).send("Error");
        }
    }
}
export const deleteAssignment = async (req, res) => {
    const body = req.body;
    console.log(body)
    if (await prisma.assignment.findFirst({
        where: {
            title: body.title,
            description: body.description,
            dueDate: body.dueDate
        }
    })) {
        try {
            const result = await prisma.assignment.deleteMany({
                where: {
                    title: body.title,
                    description: body.description,
                    dueDate: body.dueDate
                }
            });
            res.status(200).send({ message: "Assignment Deleted" });
        } catch (err) {
            console.e; ror(err);
            res.status(500).send({ message: "Server error" });
        }
    } else {
        console.log("Not found")
        res.status(404).send({ message: "Assingment not found" });
    }
}

export const editAssignment = async (req, res) => {
    const body = req.body;
    if (await prisma.assignment.findFirst({
        where: {
            title: body.oldResult.title,
            description: body.oldResult.description
        }
    })) {
        try {
            const result = await prisma.assignment.updateMany({
                where: {
                    title: body.oldResult.title,
                    description: body.oldResult.description,
                },
                data: {
                    title: body.newResult.title,
                    description: body.newResult.description,
                    dueDate: body.newResult.dueDate
                }
            })
            res.status(200).send({ message: "Updated" })
        } catch (err) {
            res.status(500).send({ message: "internal server error" })
            console.error(err)
        }
    }
    else {
        res.status(404).send({ message: "Data not found" })
    }
}