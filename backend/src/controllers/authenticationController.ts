import { Request, Response } from "express";
import {
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../services/auth";
import User from "../models/userModel";

async function login(request: Request, response: Response) {
  try {
    const { username, password } = request.body;
    if (!username || !password) {
      return response.status(400).json({ message: "Missing parameters" });
    }
    const user = { username: username };
    const userDb = await User.findOne(user);
    if (!userDb) {
      return response.status(401).json({ message: "Unauthorized" });
    }
    if (!comparePassword(password, userDb.password)) {
      return response.status(401).json({ message: "Unauthorized" });
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    await User.updateOne(
      { username: username },
      { refreshToken: refreshToken }
    );
    response
      .status(200)
      .json({ accessToken: accessToken, refreshToken: refreshToken });
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

async function getNewAccessToken(request: Request, response: Response) {
  try {
    const refreshToken = request.body.refreshToken;
    if (!refreshToken) {
      return response.status(401).json({ message: "Unauthorized" });
    }
    const user = await User.findOne({ refreshToken: refreshToken });
    if (!user) {
      return response.status(401).json({ message: "Unauthorized" });
    }
    verifyRefreshToken(refreshToken, (err, user) => {
      if (err) {
        return response.status(401).json({ message: "Unauthorized" });
      }
      const accessToken = generateAccessToken(user);
      response.status(200).json({ accessToken: accessToken });
    });
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

export default {
  login,
  getNewAccessToken,
};
