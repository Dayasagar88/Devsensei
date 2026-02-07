import { generateCodeReview } from "../ai/ai.service.js";

export const reviewCode = async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ message: "Code is required" });
  }

  try {
    const review = await generateCodeReview(code);

    console.log("Gemini response generated successfully")

    res.json({
      success: true,
      provider: process.env.AI_PROVIDER,
      review,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "AI service failed",
    });
  }
};
