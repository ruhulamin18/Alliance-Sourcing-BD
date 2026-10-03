import express from "express";

import {
  createProductController,
  getProductsController,
  getProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/product.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getProductsController);
router.get("/:id", getProductController);

// Admin
router.post("/", protect, createProductController);
router.put("/:id", protect, updateProductController);
router.delete("/:id", protect, deleteProductController);

export default router;