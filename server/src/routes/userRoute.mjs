import express from "express"
import { register, login } from "../controllers/userController.mjs";

const router = express.Router();


//Authentication Routes
router.route('/register').post(register);
router.route('/login').post(login);


export default router;