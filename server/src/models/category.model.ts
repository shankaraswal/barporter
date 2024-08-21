import mongoose, { Schema, Document } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

// ---------------------------------------------------------------
// CATEGORY INTERFACE
// ---------------------------------------------------------------
interface ICategory extends Document {
  name: string;
  image: string;
}
export { Category, ICategory };
