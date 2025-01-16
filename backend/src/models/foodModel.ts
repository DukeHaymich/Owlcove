import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
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

const Food = mongoose.model("Food", foodSchema);

export default Food;
