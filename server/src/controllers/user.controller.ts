import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User, IUser } from "../models";
import {
  ApiErrorHandler,
  ApiResponseHandler,
  asyncHandler,
  imageUploadHandler,
} from "../utils";

// ---------------------------------------------------------------
// USER REGISTRATION
// ---------------------------------------------------------------
const userRegistration = asyncHandler(
  async (req: any, res: any): Promise<any> => {
    const { username, email, password, about, mobile, location } = req.body;

    if (
      [username, email, password, about, mobile, location].some(
        (item) => !item || item.trim() === ""
      )
    ) {
      throw new ApiErrorHandler(400, "All fields are required");
    }

    const isUserExist = await User.findOne({ email });

    if (isUserExist) throw new ApiErrorHandler(400, "User already exist");

    const avatarLocalPath = req.file?.path;

    if (!avatarLocalPath) {
      throw new ApiErrorHandler(400, "Please upload a profile image file");
    }
    const uploadResult = await imageUploadHandler(avatarLocalPath);
    if (!uploadResult) {
      throw new ApiErrorHandler(400, "Profile image required");
    }

    const user = await User.create({
      username,
      email,
      password,
      about,
      mobile,
      location,
      avatar: uploadResult?.url,
    });

    const isUserCreated = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!isUserCreated) throw new ApiErrorHandler(500, "User not created");

    return res.status(201).json(
      new ApiResponseHandler(200, {
        message: "User registered successfully",
        isUserCreated,
      })
    );
  }
);

// ---------------------------------------------------------------
// USER LOGIN
// ---------------------------------------------------------------
const userLogin = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    if (!email) {
      throw new ApiErrorHandler(400, "Either username or email required");
    }

    const user: IUser = await User.findOne({ email });

    if (!user) {
      throw new ApiErrorHandler(401, "User does not exist");
    }

    const isValidPassword = await user.isPasswordCorrect(password);

    if (!isValidPassword) {
      throw new ApiErrorHandler(401, "Invalid password");
    }

    const { accessToken, refreshToken } = await generateTokens(
      user._id.toString()
    );

    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    const options = {
      // httpOnly: false,
      // secure: false,
    };

    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponseHandler(
          200,
          {
            user: loggedInUser,
            accessToken,
            refreshToken,
          },
          "User logged in successfully"
        )
      );
  }
);

// ---------------------------------------------------------------
// USER LIST
// ---------------------------------------------------------------
const userList = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const users = await User.find({});

    console.log(users);
    return res.status(200).json(
      new ApiResponseHandler(200, {
        message: "Users retrieved successfully",
        users,
      })
    );
  }
);

// ---------------------------------------------------------------
// USER DETAIL
// ---------------------------------------------------------------
const userDetail = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const user = await User.findById(req.params.id);
    if (!user) throw new ApiErrorHandler(404, "User not found");
    return res.status(200).json(
      new ApiResponseHandler(200, {
        message: "User retrieved successfully",
        user,
      })
    );
  }
);

// ---------------------------------------------------------------
// USER LOGOUT
// ---------------------------------------------------------------
const userLogout = asyncHandler(
  async (req: Request & { user?: { _id: string } }, res: Response) => {
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $unset: {
          refreshToken: 1,
        },
      },
      {
        new: true,
      }
    );
    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponseHandler(200, {}, "User logged out successfully"));
  }
);

// ---------------------------------------------------------------
// GET CURRENT USER
// ---------------------------------------------------------------
const getCurrentUser = asyncHandler(
  async (req: Request & { user?: IUser }, res: Response): Promise<void> => {
    res
      .status(200)
      .json(new ApiResponseHandler(200, req.user, "Fetched current user data"));
  }
);

// ---------------------------------------------------------------
// GENERATE TOKENS
// ---------------------------------------------------------------
const generateTokens = async (userId: string) => {
  try {
    const user: IUser = await User.findById(userId);

    if (!user) {
      throw new ApiErrorHandler(404, "User not found");
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiErrorHandler(500, "Error while generating tokens");
  }
};

// ---------------------------------------------------------------
// REFRESH ACCESS TOKEN for session out
// ---------------------------------------------------------------
const refreshAccessToken = asyncHandler(async (req: Request, res: Response) => {
  const newRefreshToken = req?.cookies?.refreshToken;

  if (!newRefreshToken) {
    throw new ApiErrorHandler(401, "Unauthorized request found");
  }

  try {
    const decodeToken = jwt.verify(
      newRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    ) as { _id: string };

    const user = await User.findById(decodeToken._id);

    if (!user) {
      throw new ApiErrorHandler(401, "Invalid token found");
    }

    if (newRefreshToken !== user?.refreshToken) {
      throw new ApiErrorHandler(401, "Refresh token is expired");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, refreshToken } = await generateTokens(
      user._id.toString()
    );

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponseHandler(
          200,
          {
            accessToken,
            refreshToken: newRefreshToken,
          },
          "Access token refreshed successfully"
        )
      );
  } catch (error) {
    throw new ApiErrorHandler(401, error.message || "Invalid token found");
  }
});

export {
  userRegistration,
  userList,
  userDetail,
  userLogin,
  userLogout,
  refreshAccessToken,
  generateTokens,
  getCurrentUser,
};
