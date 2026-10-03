import express from "express";

import {
  registerAdmin,
  loginAdminController,
} from "../controllers/auth.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerAdmin);

router.post("/login", loginAdminController);

router.get("/me", protect, (req, res) => {
  res.json({
    success: true,
    message: "Authenticated admin",
    admin: req.admin,
  });
});

export default router;