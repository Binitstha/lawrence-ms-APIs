import { Router } from "express";

import registerController from "./controller.js";
const router = Router();
import User from '../../../../model/user/userModal.js';

router.post("/register", async (req, res) => {
   registerController(req,res);
});

export default router;