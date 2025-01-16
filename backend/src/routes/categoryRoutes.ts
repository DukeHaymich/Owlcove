import express, { Router } from "express";
import CategoryController from "../controllers/categoryController";

const router: Router = express.Router();

router.get("/", CategoryController.getAll);
router.post("/override", CategoryController.postOverride);

export default router;
