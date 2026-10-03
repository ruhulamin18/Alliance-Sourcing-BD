import express from "express";

import {
  createMachineryController,
  getMachinery,
  getMachineryItem,
  updateMachineryController,
  removeMachinery,
} from "../controllers/machinery.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// Admin only
router.post("/", protect, createMachineryController);

// Public
router.get("/", getMachinery);

router.get("/:id", getMachineryItem);

// Admin only
router.put("/:id", protect, updateMachineryController);

router.delete("/:id", protect, removeMachinery);

export default router;