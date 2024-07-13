import mongoose, { Schema, Document } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// ---------------------------------------------------------------
// DEFINE USER SCHEMA
// ---------------------------------------------------------------
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
    refreshToken: {
      type: String,
      trim: true,
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

// ---------------------------------------------------------------
// HASHING USER PASSWORD BEFORE SAVING TO DATABASE
// ---------------------------------------------------------------
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// ---------------------------------------------------------------
// VRIFYING USER PASSWORD
// ---------------------------------------------------------------
userSchema.methods.isPasswordCorrect = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

// ---------------------------------------------------------------
// GENERATE ACCESS TOKEN
// ---------------------------------------------------------------
userSchema.methods.generateAccessToken = function (): string {
  const accessToken = jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
  return accessToken;
};

// ---------------------------------------------------------------
// GENERATE REFRESH TOKEN
// ---------------------------------------------------------------
userSchema.methods.generateRefreshToken = function () {
  const refreshToken = jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
  return refreshToken;
};

const User = mongoose.model("User", userSchema);

// ---------------------------------------------------------------
// USER INTERFACE
// ---------------------------------------------------------------
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  refreshToken?: string;
  generateAccessToken?: () => string;
  generateRefreshToken?: () => string;
  isPasswordCorrect?: (password: string) => Promise<boolean>;
}

export { User, IUser };
