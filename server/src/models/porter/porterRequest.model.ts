import mongoose, { Schema } from "mongoose";

const porterRequestSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    porter: {
      type: Schema.Types.ObjectId,
      ref: "Porter",
      required: true,
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },
    pickUpLocation: {
      type: String,
      required: true,
      trim: true,
    },
    dropOffLocation: {
      type: String,
      required: true,
      trim: true,
    },
    vehicleRequired: {
      type: String,
      required: true,
      trim: true,
    },
    vehicleSize: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "ACCEPTED", "COMPLETED", "CANCELLED"],
      default: "PENDING",
    },
    pickUpTime: {
      type: Date,
      required: true,
    },
    dropOffTime: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const PorterRequest = mongoose.model(
  "PorterRequest",
  porterRequestSchema
);
