import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import assModel from "../../../model/assignment/createAssignmentModel.js";

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

import assingmentData from '../../../model/assignment/addStudentAssignmentModel.js';
export const assignmentCheckController = async (req, res) => {
    const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    const userinfo = await req.body;

    userinfo.forEach(async (element) => {
        if (element.check) {

            try {
                await assingmentData.create({
                    studentid: element.studentid,
                    studentname: element.studentname,
                    Submissiondate: date.getFullYear() + "/" + month[date.getMonth()] + "/" + date.getDate()
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
    console.log(req.body);
    const body = await req.body
    try {
        const result = await prisma.assignment.create({
            data: {
                semester: body.semester,
                title: body.Title,
                description: body.Description,
                assignedDate: date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate(),
                dueDate: body.Date
            }
        })
        res.status(200).send("Data inserted");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error");
    }
}