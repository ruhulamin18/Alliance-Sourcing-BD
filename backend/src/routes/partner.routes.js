import express from "express";

import {
  createPartnerController,
  getPartners,
  getPartner,
  updatePartnerController,
  removePartner,
} from "../controllers/partner.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// Admin only
router.post("/", protect, createPartnerController);

// Public
router.get("/", getPartners);

router.get("/:id", getPartner);

// Admin only
router.put("/:id", protect, updatePartnerController);

router.delete("/:id", protect, removePartner);

export default router;