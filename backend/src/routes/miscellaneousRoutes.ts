import { Router } from "express";
import { corsClient } from "../middlewares/cors";
import miscellaneousController from "../controllers/miscellaneousController";

const router: Router = Router();

router.get("/", corsClient, miscellaneousController.getAll);
router.put("/", miscellaneousController.updateAll);
router.put("/maxTable", miscellaneousController.updateMaxTable);
router.put(
  "/maxGuestsPerTable",
  miscellaneousController.updateMaxGuestsPerTable
);
router.put("/openHours", miscellaneousController.updateOpenHours);

export default router;
