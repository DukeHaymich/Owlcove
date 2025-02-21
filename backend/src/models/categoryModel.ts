import mongoose from "mongoose";

interface ICategoryImage {
  name: string;
  dataBase64: string;
  contentType: string;
}

export interface ICategory {
  order: number;
  name: string;
  image?: ICategoryImage;
}

const categoryImageSchema = new mongoose.Schema<ICategoryImage>({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  dataBase64: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
});

const categorySchema = new mongoose.Schema<ICategory>({
  order: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  image: {
    type: categoryImageSchema,
    required: false,
  },
});

const Category = mongoose.model<ICategory>("Category", categorySchema);

export default Category;
