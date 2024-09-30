import express from 'express'
import {signup,getalluser,signin} from "../controller/auth.controller.js"

const router = express.Router();

router.post("/signup",signup);
router.get("/signup",getalluser);
router.post('/signin',signin);

export default router;