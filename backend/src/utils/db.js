
// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection failed", error.message);
//     process.exit(1);
//   }
// };






import dns from "dns";
import mongoose from "mongoose";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected🟢");
  } catch (error) {
    console.error("DB connection error⚠️:", error);
  }
};




