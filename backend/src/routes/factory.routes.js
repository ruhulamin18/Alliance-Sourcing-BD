import express from "express";

import {
  createFactoryController,
  getFactories,
  getFactory,
  updateFactoryController,
  removeFactory,
} from "../controllers/factory.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// Admin only
router.post("/", protect, createFactoryController);

// Public
router.get("/", getFactories);

router.get("/:id", getFactory);

// Admin only
router.put("/:id", protect, updateFactoryController);

router.delete("/:id", protect, removeFactory);

export default router;