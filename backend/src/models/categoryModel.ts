import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  image: {
    type: String,
    required: false,
  },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
