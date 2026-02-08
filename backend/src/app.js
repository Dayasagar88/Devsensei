import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import interviewRoutes from "./routes/interview.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "DevSensei backend running",
  });
});

app.use("/api/auth", authRoute);
app.use("/api/ai", aiRoutes);
app.use("/api/interview", interviewRoutes);





export default app;