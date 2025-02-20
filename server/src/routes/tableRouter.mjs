import express from "express";
import { addTable, updateTable, getTables, getTableById } from "../controllers/tableController.mjs";
import isVerifiedUser from "../middlewares/tokenVerification.mjs";


const router = express.Router();

router.route('/').post(isVerifiedUser, addTable);
router.route('/').get(isVerifiedUser, getTables);
router.route('/:id').get(isVerifiedUser, getTableById);
router.route('/:id').put(isVerifiedUser, updateTable)


export default router;