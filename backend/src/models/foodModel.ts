import mongoose from "mongoose";

export interface IFood {
  name: string;
  price: number;
  category: string;
  tags: string[];
}

const foodSchema = new mongoose.Schema<IFood>(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      ref: "Category",
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model<IFood>("Food", foodSchema);

export default Food;
