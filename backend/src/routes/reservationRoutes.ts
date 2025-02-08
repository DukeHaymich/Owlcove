import { Router } from "express";
import reservationController from "../controllers/reservationController";

const router: Router = Router();

router
  .route("/slots/")
  .get(reservationController.getSlots)
  .post(reservationController.postSlots);
router
  .route("/:date")
  .get(reservationController.getReservationByDate)
  .post(reservationController.postReservation);

export default router;
