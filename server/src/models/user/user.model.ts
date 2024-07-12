import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      trim: true,
    },
    mobile: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
    services: [
      {
        type: Schema.Types.ObjectId,
        ref: "Service",
      },
    ],
    porterRequests: [
      {
        type: Schema.Types.ObjectId,
        ref: "PorterRequest",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
