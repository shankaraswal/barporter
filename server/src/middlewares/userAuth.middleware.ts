import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ApiErrorHandler, asyncHandler } from "../utils";
import { IUser, User } from "../models";

export const verifyJWToken = asyncHandler(
  async (
    req: Request & { user?: IUser },
    res: Response,
    next: NextFunction
  ) => {
    try {
      // console.log("verifyJWToken middleware called", req.headers);
      // Extract token from cookies or Authorization header
      const token = req
        .header("Authorization")
        ?.replace("Bearer ", "")
        .replace(/['"]+/g, "");

      if (!token) {
        throw new Error("Unauthorized request found");
      }

      // Verify the token using the secret key
      const decodedToken = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET as string
      ) as JwtPayload;

      // Extract user ID from the decoded token payload
      const userId = decodedToken._id || decodedToken.id;

      // Fetch the user from the database, excluding sensitive fields
      const user = await User.findById(userId).select(
        "-password -refreshToken"
      );

      // If user is not found, throw an error
      if (!user) {
        throw new ApiErrorHandler(401, "Invalid Access Token");
      }

      // Attach the user to the request object for use in subsequent middleware
      req.user = user;

      // Proceed to the next middleware function
      next();
    } catch (error) {
      // Handle any errors that occur during token verification
      throw new ApiErrorHandler(401, error?.message || "Invalid access token");
    }
  }
);
