import dotenv from "dotenv";
import express, { Express } from "express";
import { connectDB } from "./configs/database";

const app: Express = express();

// Config
dotenv.config();
const port = process.env.PORT || 3005;

// Middleware
app.use(express.json());

// Routes
import foodRouter from "./routes/foodRoutes";
import categoryRouter from "./routes/categoryRoutes";
import menusRouter from "./routes/menusRoutes";
app.use("/food", foodRouter);
app.use("/category", categoryRouter);
app.use("/menus", menusRouter);

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
  }
}

startServer();
