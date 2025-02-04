import express from 'express';
const router = express.Router();
import { protectRoute } from '../middlewares/authMiddleware.js';
import {sendConnectionRequest,acceptConnectionRequest,rejectConnectionRequest,getConnectionRequests,getUserConnections,removeConnection,getConnectionStatus} from '../Controllers/connectionController.js'

router.post("/request/:userId", protectRoute, sendConnectionRequest);
router.put("/accept/:requestId", protectRoute, acceptConnectionRequest);
router.put("/reject/:requestId", protectRoute, rejectConnectionRequest);
router.get("/requests", protectRoute, getConnectionRequests);
router.get("/", protectRoute, getUserConnections);
router.delete("/:userId", protectRoute, removeConnection);
router.get("/status/:userId", protectRoute, getConnectionStatus);




export default router   