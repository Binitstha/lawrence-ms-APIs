import collegeEvents from '../../../model/events/eventModel.js';


export const getEventsController=async (req,res)=>{
    try {
        const result = await collegeEvents.findAll({
            raw: true
           })
           res.send(result)
       } catch (err) { 
        console.log(err);
        }
}


export const addEventController= async (req,res)=>{
    const userinfo = await req.body;
    try {
        await collegeEvents.create({
            events: userinfo.events,
            eventDesc: userinfo.eventdesc,
            date: userinfo.date,
            venue: userinfo.venue
        })
        res.send("Data inserted")
    } catch (err) {
        console.log(err)
        res.send("Data insertion falied")
    }
}