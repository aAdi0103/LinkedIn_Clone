import express from 'express'
const router = express.Router()

import {getFeedPosts,createPosts} from '../Controllers/postsControllers.js'

import {protectRoute} from '../middlewares/authMiddleware.js'


router.get('/',protectRoute,getFeedPosts);
router.post('/create',protectRoute,createPosts);

export default router