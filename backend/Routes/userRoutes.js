import express from "express"
const router = express.Router();
import {suggesedUser,getPublicProfile,updateProfile} from '../Controllers/userControllers.js'
import {protectRoute} from '../middlewares/authMiddleware.js'

router.get('/suggestions',protectRoute,suggesedUser); 
router.get("/:username", protectRoute, getPublicProfile);
router.put("/profile", protectRoute, updateProfile);

export default router