import express from 'express';
const router = express.Router();
import { protectRoute } from '../middlewares/authMiddleware.js';
import {sendConnectionRequest} from '../Controllers/connectionController.js'

router.post("/request/:userId", protectRoute, sendConnectionRequest);
// router.put("/accept/:requestId", protectRoute, acceptConnectionRequest);



export default router