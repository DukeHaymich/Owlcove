import { Router } from "express";
import CategoryController from "../controllers/categoryController";
import { corsClient } from "../middlewares/cors";
import { upload } from "../middlewares/multer";

const router: Router = Router();

router.get("/", corsClient, CategoryController.getAll);
router.post("/override", <any>upload.any(), CategoryController.postOverride);
router.post("/", <any>upload.any(), CategoryController.updateImage);
router.get("/search", CategoryController.getByName);

export default router;
