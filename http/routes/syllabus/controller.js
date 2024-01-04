import SyllabusData from "../../../model/syllabus/syllabusModel.js";

export const getSyllabusController=async (req,res)=>{
    try {
        const result = await SyllabusData.findAll({
            attributes: ['subjectCode', 'chapterId', 'status'],
            raw: true
        });
        res.json({ result })
    } catch (err) {
        res.status(500).send('Internal Server Error');
        throw err
    }
}


export const addSyllabusController=async(req,res)=>{
    try {
        const bodyData = await req.body
        for (const element of bodyData) {
            const status = (element.status) ? "complete" : "incomplete"

            const newData = {
                Subjectcode: element.Subjectcode,
                chapterId: element.chapterid,
                status: status
            }
            await SyllabusData.upsert(newData, {
                fields: ['Subjectcode', 'chapterId', 'status']
            })
        };
        const response = {
            "status": "200",
            "message": "Syllabus entry is completed"
        }
        res.status(200).send(response)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}