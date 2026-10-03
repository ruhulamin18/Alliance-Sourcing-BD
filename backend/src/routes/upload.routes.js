import express from "express";
import upload from "../middleware/upload.middleware.js";
import { uploadImageController } from "../controllers/upload.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  upload.single("image"),
  uploadImageController
);

export default router;