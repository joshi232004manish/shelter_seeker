import express from 'express'
import {signup,getalluser} from "../controller/auth.controller.js"

const router = express.Router();

router.post("/signup",signup);
router.get("/signup",getalluser);

export default router;