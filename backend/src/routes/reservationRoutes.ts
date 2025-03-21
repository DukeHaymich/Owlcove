import { Router } from "express";
import reservationController from "../controllers/reservationController";
import { corsClient } from "../middlewares/cors";

const router: Router = Router();

router
  .route("/slots/")
  .get(corsClient, reservationController.getSlots)
  .post(reservationController.postSlots);
router
  .route("/")
  .get(corsClient, reservationController.getByDateAndBranch)
  .post(corsClient, reservationController.post);
// CORS Pre-flight
router.options("/", corsClient);

export default router;
