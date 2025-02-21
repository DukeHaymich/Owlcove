import { Request, Response } from "express";
import Category from "../models/categoryModel";
import mongoose from "mongoose";
import { aggregate } from "../services/category";

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
    let categoriesList = request.body.name;
    let files = request.files;
    if (!files) {
      throw new Error("No files uploaded");
    }
    let processedCategory = aggregate(categoriesList, files);
    await Category.deleteMany({}, { session: session });
    const categoryDocuments = await Category.insertMany(processedCategory, {
      session: session,
    });
    await session.commitTransaction();
    response.status(200).json(categoryDocuments);
  } catch (err: any) {
    await session.abortTransaction();
    response.status(500).json({ message: err.message });
  }
}

async function updateImage(request: Request, response: Response) {
  /// TODO: Implement
  try {
    const files = request.files;
    if (!files) {
      response.status(400).json({ message: "No files uploaded" });
      return;
    }
    const rest = request.body;
    console.log("Files:", files);
    console.log("Rest:", rest);
    response.status(200).json({ message: "Successfully uploaded" });
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

async function getByName(request: Request, response: Response) {
  try {
    const result = await Category.find({ name: request.query.name });
    response.status(200).json(result);
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

export default {
  getAll,
  postOverride,
  updateImage,
  getByName,
};
