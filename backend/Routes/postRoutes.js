import express from 'express'
const router = express.Router()

import {getFeedPosts,createPosts,deletePost,createComment,likePost} from '../Controllers/postsControllers.js'

import {protectRoute} from '../middlewares/authMiddleware.js'


router.get('/',protectRoute,getFeedPosts);
router.post('/create',protectRoute,createPosts);
router.delete('/delete/:id',protectRoute,deletePost)
router.post("/:id/comment", protectRoute, createComment);
router.post("/:id/like", protectRoute, likePost);

export default router