import "dotenv/config";

import app from "./app.js";
import { connectDB } from "./utils/db.js";

const PORT = process.env.PORT || 5000;

// console.log("OPENAI KEY LOADED:", !!process.env.OPENAI_API_KEY);

const startServer = async () => {
  try {
    await connectDB(); // 🔥 only place
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

startServer();
