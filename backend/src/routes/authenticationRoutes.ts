import { Router } from "express";
import authenticationController from "../controllers/authenticationController";

const router: Router = Router();

router.post("/login", authenticationController.login);
router.post("/refresh", authenticationController.getNewAccessToken);

export default router;
