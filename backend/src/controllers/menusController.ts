import { Request, Response } from "express";
import Food from "../models/foodModel";
import mongoose from "mongoose";
import Category from "../models/categoryModel";

interface IMenu {
  name: string;
  image: string;
  foods: any[];
}

async function getFoodGroupByCategory(request: Request, response: Response) {
  try {
    // Set up menu by categories
    let categoryList = await Category.find({}).sort({ order: 1 });
    const categoryToIndexMap = new Map();
    let menus: IMenu[] = categoryList.map((category: any, index: number) => {
      categoryToIndexMap.set(category.name, index);
      return {
        name: category.name,
        image: category.image || "",
        foods: [],
      };
    });
    // Add foods to categories
    let foodList = await Food.find({});
    foodList.forEach((food: any) => {
      const { category, ...filterFood } = food.toObject();
      const categoryIndex = categoryToIndexMap.get(category) ?? 0;
      menus[categoryIndex].foods.push(filterFood);
    });
    response.status(200).json(menus);
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

export default {
  getFoodGroupByCategory,
  postOverride,
};
