import jwt from "jsonwebtoken";

function generateAccessToken(user: any) {
  return jwt.sign(user, <string>process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10m",
  });
}

export { generateAccessToken };
