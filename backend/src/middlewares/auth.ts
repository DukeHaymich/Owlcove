import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface AuthenticateInfoRequest extends Request {
  user?: any;
}

export function authenticateToken(
  request: AuthenticateInfoRequest,
  response: Response,
  next: NextFunction
) {
  const token = request.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, <string>process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return response.status(401).json({ message: "Unauthorized" });
    }
    request.user = user;
    next();
  });
}
