import { User } from "../models/user/user.model";
import {
  ApiErrorHandler,
  ApiResponseHandler,
  asyncHandler,
  imageUploadHandler,
} from "../utils";

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

const userList = asyncHandler(async (req: any, res: any): Promise<any> => {
  const users = await User.find({});

  console.log(users);
  return res.status(200).json(
    new ApiResponseHandler(200, {
      message: "Users retrieved successfully",
      users,
    })
  );
});

const userDetail = asyncHandler(async (req: any, res: any): Promise<any> => {
  const user = await User.findById(req.params.id);
  if (!user) throw new ApiErrorHandler(404, "User not found");
  return res.status(200).json(
    new ApiResponseHandler(200, {
      message: "User retrieved successfully",
      user,
    })
  );
});

export { userRegistration, userList, userDetail };
