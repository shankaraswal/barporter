import mongoose, { Schema } from "mongoose";

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
    images: [
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
      required: true,
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

export const User = mongoose.model("Item", itemSchema);
