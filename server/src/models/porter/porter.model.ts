import mongoose, { Schema } from "mongoose";

const porterSchema = new Schema(
  {
    porterName: {
      type: String,
      required: true,
      trim: true,
    },
    porterEmail: {
      type: String,
      required: true,
      trim: true,
    },
    porterMobile: {
      type: String,
      required: true,
      trim: true,
    },
    porterLocation: {
      type: String,
      required: true,
      trim: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
    ratings: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
        comment: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Porter = mongoose.model("Porter", porterSchema);
