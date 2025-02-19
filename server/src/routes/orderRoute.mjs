import express from "express"
import { addOrder, getOrderById, getOrders, updateOrder } from "../controllers/orderController.mjs";
import isVerifiedUser from "../middlewares/tokenVerification.mjs";

const router = express.Router();


router.route('/').post(isVerifiedUser, addOrder);
router.route('/').get(isVerifiedUser, getOrders);
router.route('/:id').get(isVerifiedUser, getOrderById);
router.route('/:id').put(isVerifiedUser, updateOrder);

export default router;