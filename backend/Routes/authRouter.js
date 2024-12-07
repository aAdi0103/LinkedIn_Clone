import express from 'express';
import { signup,login,logout,asc } from '../Controllers/authControlller.js';
const router= express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);
router.get('/asc',asc)

export default router