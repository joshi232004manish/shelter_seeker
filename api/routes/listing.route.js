import express from 'express'
import { verifyToken } from '../utils/verifyToken.js';
import { createListing } from '../controller/listing.controller.js';
import { deleteListing } from '../controller/listing.controller.js';


const router = express.Router();

// router.post('/create',verifyToken,createListing);
router.post('/create' ,verifyToken, createListing);
router.delete('/delete/:id',verifyToken,deleteListing);

export default  router;
