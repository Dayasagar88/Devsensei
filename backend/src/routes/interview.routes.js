import express from "express";
import {
  getInterviewQuestion,
  evaluateAnswer,
} from "../interview/interview.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Generate interview question
router.post("/question", protect, getInterviewQuestion);

// Evaluate answer
router.post("/evaluate", protect, evaluateAnswer);

export default router;
