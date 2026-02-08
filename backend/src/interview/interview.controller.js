import {
  generateInterviewQuestion,
  evaluateInterviewAnswer,
} from "./interview.service.js";

import { Interview } from "../models/interview.model.js";

// --------------------
// Generate Question
// --------------------
export const getInterviewQuestion = async (req, res) => {
  try {
    const { role } = req.body;

    if (!role) {
      return res.status(400).json({
        success: false,
        message: "Role is required",
      });
    }

    const question = await generateInterviewQuestion(role);

    const interview = await Interview.create({
      user: req.user.id,
      role,
      question,
      status: "pending",
    });

    res.json({
      success: true,
      interviewId: interview._id,
      question,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to generate interview question",
    });
  }
};

// --------------------
// Evaluate Answer
// --------------------
export const evaluateAnswer = async (req, res) => {
  try {
    const { interviewId, answer } = req.body;

    if (!interviewId || !answer) {
      return res.status(400).json({
        success: false,
        message: "Interview ID and answer are required",
      });
    }

    const interview = await Interview.findOne({
      _id: interviewId,
      user: req.user.id,
    });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview session not found",
      });
    }

    if (interview.status === "completed") {
      return res.status(400).json({
        success: false,
        message: "Interview already completed",
      });
    }

    // 🔥 evaluation is now JSON (not string)
    const evaluation = await evaluateInterviewAnswer(
      interview.role,
      interview.question,
      answer
    );

    interview.answer = answer;
    interview.evaluation = evaluation;
    interview.score = evaluation.score;
    interview.status = "completed";

    await interview.save();

    res.json({
      success: true,
      evaluation,
      score: evaluation.score,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to evaluate interview answer",
    });
  }
};
