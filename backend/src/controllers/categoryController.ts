import { Request, Response } from "express";
import Category from "../models/categoryModel";
import mongoose from "mongoose";

async function getAll(request: Request, response: Response) {
  try {
    const result = await Category.find({});
    response.status(200).json(result);
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

async function postOverride(request: Request, response: Response) {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    await Category.deleteMany({}, { session: session });
    const product = await Category.insertMany(request.body, {
      session: session,
    });
    await session.commitTransaction();
    response.status(200).json(product);
  } catch (err: any) {
    await session.abortTransaction();
    response.status(500).json({ message: err.message });
  }
}

export default {
  getAll,
  postOverride,
};
