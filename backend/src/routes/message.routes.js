import express from "express";

import {
  getMessages,
  getMessage,
  markAsRead,
  removeMessage,
} from "../controllers/message.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getMessages);

router.get("/:id", protect, getMessage);

router.patch("/:id/read", protect, markAsRead);

router.delete("/:id", protect, removeMessage);

export default router;