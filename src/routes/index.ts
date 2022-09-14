import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Olá Mundo");
});

router.get("/contato", (req: Request, res: Response) => {
  res.send("Form de contato");
});

router.get("/sobre", (req: Request, res: Response) => {
  res.send("página sobre a empresa");
});

export default router;
