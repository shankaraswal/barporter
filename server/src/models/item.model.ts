import mongoose, { Schema, Document } from "mongoose";

const itemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    prodImages: [
      {
        type: String,
        required: true,
      },
    ],
    category: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    discountedPrice: {
      type: Number,
      default: 0,
    },
    trader: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    tradeWith: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    isAvailable: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

// ---------------------------------------------------------------
// USER INTERFACE
// ---------------------------------------------------------------
interface IItem extends Document {
  title: string;
  description: string;
  prodImages: string[];
  category: string;
  price: number;
  discount: number;
  discountedPrice: number;
  trader: any;
  tradeWith: any;
  isAvailable: boolean;
}

export { Item, IItem };
