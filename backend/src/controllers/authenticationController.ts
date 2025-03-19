import { Request, Response } from "express";
import { generateAccessToken } from "../utils/auth";

async function login(request: Request, response: Response) {
  try {
    const username = request.body.username;
    const user = { name: username };
    const accessToken = generateAccessToken(user);

    response.status(200).json({ accessToken: accessToken });
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

export default {
  login,
};
