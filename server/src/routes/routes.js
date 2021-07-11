import express from "express";
import {userSignUp} from "../controllers/user-controller.js";

const router = express.Router();

router.post('/signup', userSignUp)

export default router;
