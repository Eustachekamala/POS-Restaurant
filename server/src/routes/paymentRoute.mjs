import express from "express";
import isVerifiedUser from "../middlewares/tokenVerification.mjs";
import createOrder from "../controllers/paymentControler.mjs";


const router = express.Router();

router.route('/treate-order').post(isVerifiedUser, createOrder);
// router.route('/').get(isVerifiedUser, getTables);
// router.route('/:id').get(isVerifiedUser, getTableById);
// router.route('/:id').put(isVerifiedUser, updateTable)


export default router;