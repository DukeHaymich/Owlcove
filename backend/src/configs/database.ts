import mongoose from "mongoose";

async function connectDB() {
  return await mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/Owlcove"
  );
}

export { connectDB };
