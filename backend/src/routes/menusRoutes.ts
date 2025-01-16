import express, { Router } from "express";
import menusController from "../controllers/menusController";

const router: Router = express.Router();

router.get("/", menusController.getFoodGroupByCategory);
router.post("/override/", menusController.postOverride);

export default router;
