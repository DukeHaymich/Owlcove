import express from "express";
import path from "path";

export default function middlewares(app: any) {
  // Json parser
  app.use(express.json());
  // Static files
  // app.use(express.static(path.join(__dirname, "public")));
}
