import express from "express";

import {
  createProductController,
  getProducts,
  getProduct,
  updateProductController,
  removeProduct,
} from "../controllers/product.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// Admin only
router.post("/", protect, createProductController);

// Public
router.get("/", getProducts);

router.get("/:id", getProduct);

// Admin only
router.put("/:id", protect, updateProductController);

router.delete("/:id", protect, removeProduct);

export default router;