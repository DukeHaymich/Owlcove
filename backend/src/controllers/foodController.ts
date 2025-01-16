import { Request, Response } from "express";
import Food from "../models/foodModel";

async function getByCategory(request: Request, response: Response) {
  try {
    const { category } = request.params;
    const result = await Food.find({ category: category });
    response.status(200).json(result);
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

export default {
  getByCategory,
};
