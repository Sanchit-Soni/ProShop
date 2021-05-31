import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();
import {
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  createProduct,
  createProductReview,
} from "../controllers/productController.js";

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id/reviews").post(protect, createProductReview);

// @desc Fetch single products
// @route GET /api/products/:id
// @access Public
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
