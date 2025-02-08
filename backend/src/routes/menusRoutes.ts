import { Router } from "express";
import menusController from "../controllers/menusController";
import { corsClient } from "../middlewares/cors";

const router: Router = Router();

router.get("/", corsClient, menusController.getFoodGroupByCategory);
router.post("/override/", menusController.postOverride);

export default router;
