import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ApiErrorHandler, asyncHandler } from "../utils";
import { IUser, User } from "../models";

export const verifyJWToken = asyncHandler(
  async (
    req: Request & { user?: IUser },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");

      if (!token) {
        throw new ApiErrorHandler(401, "Unauthorized request found");
      }

      const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const uid = decodedToken;
      const user = await User.findById(uid).select("-password -refreshToken");
      if (!user) {
        throw new ApiErrorHandler(401, "Invalid Access Token");
      }
      req.user = user;
      next();
    } catch (error) {
      throw new ApiErrorHandler(401, error?.message || "Invalid access token");
    }
  }
);
