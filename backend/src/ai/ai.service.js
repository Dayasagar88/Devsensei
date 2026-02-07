import { geminiModel } from "./gemini.js";
// import { openai } from "./openai.js";
import { codeReviewPrompt } from "./prompts.js";

export const generateCodeReview = async (code) => {
  const prompt = codeReviewPrompt(code);

  // ✅ Gemini
  if (process.env.AI_PROVIDER === "gemini") {
    const result = await geminiModel.generateContent(prompt);
    return result.response.text();
  }

  // ✅ OpenAI (fallback / future)
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2,
  });

  return response.choices[0].message.content;
};
