import { Router } from "express"
import studentData from "./studentDB.js";
const router = Router();

router.get("/studentData", async (req, res) => {
    try {
        const result = await studentData.findAll({
          attributes: ['studentname'],
          raw: true
        });
        const studentNames = result.map((row) => row.studentname);
        res.json({studentNames})
      } catch (err) {
        res.status(500).send('Internal Server Error');
        throw err
      }
});

export default router;