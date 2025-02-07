import mongoose from "mongoose";

const categoryImageSchema = new mongoose.Schema({
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

const categorySchema = new mongoose.Schema({
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

const Category = mongoose.model("Category", categorySchema);

export default Category;
