import dotenv from "dotenv";
import express, { Express } from "express";
import { connectDB } from "./configs/database";

const app: Express = express();

// Config
dotenv.config();
const port = process.env.PORT || 3005;

// Middleware
import middlewares from "./middlewares";
middlewares(app);

// Routes
import routes from "./routes";
routes(app);

async function startServer() {
  try {
    let database = await connectDB();
    if (database) {
      console.log("[server]: Connected to MongoDB");
      app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
      });
    } else {
      console.log("[server]: Failed to connect to MongoDB");
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

startServer();
