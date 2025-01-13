import { Request, Response } from "express";
import Food from "../models/foodModel";
import mongoose from "mongoose";

async function getOrderedByCategory(request: Request, response: Response) {
  try {
    let queryResult = await Food.find({});
    console.log("[server]: getSortedByCategory()");
    response.status(200).json(queryResult);
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

async function postOverride(request: Request, response: Response) {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    await Food.deleteMany({}, { session: session });
    const product = await Food.insertMany(request.body, { session: session });
    await session.commitTransaction();
    response.status(200).json(product);
  } catch (err: any) {
    await session.abortTransaction();
    response.status(500).json({ message: err.message });
  }
}

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
  getOrderedByCategory,
  postOverride,
  getByCategory,
};
