import express from "express";
import { reviewCode } from "../controllers/ai.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/review", protect, reviewCode);

export default router;
