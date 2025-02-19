import express from "express"
import { register, login, getUserData } from "../controllers/userController.mjs";
import isVerified from "../middlewares/tokenVerification.mjs";

const router = express.Router();


//Authentication Routes
router.route('/register').post(register);
router.route('/login').post(login);

router.route('/status').get(isVerified,getUserData);


export default router;