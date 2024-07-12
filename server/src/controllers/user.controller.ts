import { User } from "../models/user/user.model";
import {
  ApiErrorHandler,
  ApiResponseHandler,
  asyncHandler,
  imageUploadHandler,
} from "../utils";

const registerUser = asyncHandler(async (req: any, res: any): Promise<any> => {
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
});

export { registerUser };
