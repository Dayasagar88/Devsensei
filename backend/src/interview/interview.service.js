import { geminiModel } from "../ai/gemini.js";
import {
  interviewQuestionPrompt,
  interviewEvaluationPrompt,
} from "./interview.prompts.js";

// Generate interview question
export const generateInterviewQuestion = async (role) => {
  const prompt = interviewQuestionPrompt(role);

  const result = await geminiModel.generateContent(prompt);
  return result.response.text();
};

// Evaluate candidate answer
export const evaluateInterviewAnswer = async (role, question, answer) => {
  const prompt = interviewEvaluationPrompt(question, answer, role);

  const result = await geminiModel.generateContent(prompt);
  const rawText = result.response.text();

  try {
    return JSON.parse(rawText);
  } catch (err) {
    throw new Error("AI returned invalid JSON");
  }
};

