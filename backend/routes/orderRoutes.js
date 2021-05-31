import express from "express";
const router = express.Router();
import {
  getMyOrders,
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getAllOrders,
} from "../controllers/OrderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, admin, getAllOrders);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);

export default router;
