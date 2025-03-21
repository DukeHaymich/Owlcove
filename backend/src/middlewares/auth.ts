import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../services/auth";

declare module "express-serve-static-core" {
  interface Request {
    user?: any;
  }
}

export function authenticateToken(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const accessToken = request.headers["authorization"]?.split(" ")[1];
  if (!accessToken) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  verifyAccessToken(accessToken, (err, user) => {
    if (err) {
      return response.status(401).json({ message: "Unauthorized" });
    }
    request.user = user;
    next();
  });
}
