import express from 'express'
import { verifyToken } from '../utils/verifyToken';
import { createListing } from '../controller/listing.controller';


const router = express.Router();

router.post('/create',verifyToken,createListing);

export default  router;
