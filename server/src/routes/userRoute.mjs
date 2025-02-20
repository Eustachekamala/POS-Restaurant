import express from "express"
import { register, login, getUserData, logout } from "../controllers/userController.mjs";
import isVerifiedUser from "../middlewares/tokenVerification.mjs";

const router = express.Router();


//Authentication Routes
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').post( isVerifiedUser,logout);

router.route('/').get(isVerifiedUser,getUserData);


export default router;