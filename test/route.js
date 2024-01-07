import express from 'express'
import noticeTest from './model.js'
import { compareSync } from 'bcrypt'
const app = express()
const port = 3001
app.get('/', async (req, res) => {
    const userinfo = req.body
    try {
        await assModel.create({
            id: userinfo.id,
            header: userinfo.header
        });
        const response = {
            status: '200',
            message: 'hello',
        }
        res.status(200).send(response);
    } catch (err) {
        res.send(err)
    }
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))