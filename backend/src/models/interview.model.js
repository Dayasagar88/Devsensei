import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    role: {
      type: String,
      enum: ["frontend", "backend", "fullstack"],
      required: true,
    },

    question: {
      type: String,
      required: true,
    },

    answer: {
      type: String,
      default: null,
    },

    evaluation: {
      score: {
        type: Number,
        min: 0,
        max: 10,
      },
      strengths: [String],
      weaknesses: [String],
      improvements: [String],
      verdict: String,
    },

    score: {
      type: Number,
      min: 0,
      max: 10,
      default: null,
    },

    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);



export const Interview = mongoose.model(
  "Interview",
  interviewSchema
);
