import assModel from "../../../model/assignment/createAssignmentModel.js";
export const getAssignmentController=async (req,res)=>{
    const assignments= await assModel.findAll({
    });
    const response={
        status:'200',
        data:assignments,
        message:'Assignment retrived successfully',
    }
    res.status(200).send(response);
}



import assingmentData from '../../../model/assignment/addStudentAssignmentModel.js';
export const assignmentEntryController=async ()=>{
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