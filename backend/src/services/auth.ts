import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

function generateAccessToken(user: any) {
  return jwt.sign(user, <string>process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10m",
  });
}

function generateRefreshToken(user: any) {
  return jwt.sign(user, <string>process.env.REFRESH_TOKEN_SECRET);
}

function verifyAccessToken(token: string, callback: jwt.VerifyCallback) {
  jwt.verify(token, <string>process.env.ACCESS_TOKEN_SECRET, callback);
}

function verifyRefreshToken(token: string, callback: jwt.VerifyCallback) {
  jwt.verify(token, <string>process.env.REFRESH_TOKEN_SECRET, callback);
}

function hashPassword(password: string) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

function comparePassword(raw: string, hash: string) {
  return bcrypt.compareSync(raw, hash);
}

export {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  hashPassword,
  comparePassword,
};
