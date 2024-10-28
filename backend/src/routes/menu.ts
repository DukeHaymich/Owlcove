import express, { Router, Request, Response, NextFunction } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("MENU");
});

router.post("/", (req: Request, res: Response) => {
  res.send("POST MENU");
});

// Static routes should always go before dynamic routes
router.get("/new", (req: Request, res: Response) => {
  res.send("NEW MENU!");
});

router.route("/:category").get((req: Request, res: Response) => {
  res.send(`MENU CATEGORY ${req.params.category}`);
}).post((req: Request, res: Response) => {
  res.send(`POST MENU CATEGORY ${req.params.category}`);
}).delete((req: Request, res: Response) => {
  res.send(`DELETE MENU CATEGORY ${req.params.category}`);
});

router.param("category", (req: Request, res: Response, next: NextFunction, category) => {
  console.log(`CATEGORY ${category}`);
  next();
})


export default router;
