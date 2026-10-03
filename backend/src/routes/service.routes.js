import express from "express";

import {
  createServiceController,
  getServices,
  getService,
  updateServiceController,
  removeService,
} from "../controllers/service.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createServiceController);

router.get("/", getServices);

router.get("/:id", getService);

router.put("/:id", protect, updateServiceController);

router.delete("/:id", protect, removeService);

export default router;