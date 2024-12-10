import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import {
	deleteNotification,
	getUserNotifications,
	markNotificationAsRead,
} from "../Controllers/notificationControllers.js";

const router = express.Router();

router.get("/", protectRoute, getUserNotifications);

router.put("/:id/read", protectRoute, markNotificationAsRead);
router.delete("/:id", protectRoute, deleteNotification);

export default router;