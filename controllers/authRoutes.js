import express from "express";
const router=express.Router();
import {signup, login, createProfile} from './authController.js';
import upload  from "../middleware.js";
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/signup', signup);
router.post('/login', login);
router.post('/createProfile', createProfile );


export default router;
