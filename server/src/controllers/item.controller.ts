import { Request, Response } from "express";
import {
  ApiErrorHandler,
  ApiResponseHandler,
  asyncHandler,
  imageUploadHandler,
} from "../utils";
import { Item, IItem, User, IUser } from "../models";

// ---------------------------------------------------------------
// ADD ITEM
// ---------------------------------------------------------------
const addItem = asyncHandler(
  async (req: Request & { user: IUser }, res: Response): Promise<void> => {
    const {
      title,
      description,
      category,
      price,
      trader,
      discount = 0,
      isAvailable,
    } = req.body;

    if (
      [title, description, category, price].some(
        (item) => !item || item.trim() === ""
      )
    ) {
      throw new ApiErrorHandler(400, "All fields are required");
    }

    const productLocalPath = req.file?.path;

    if (!productLocalPath) {
      throw new ApiErrorHandler(400, "Please upload a profile image file");
    }
    const uploadResult = await imageUploadHandler(productLocalPath);
    if (!uploadResult) {
      throw new ApiErrorHandler(400, "Profile image required");
    }

    console.log("=================================");
    console.log(req.user);
    console.log("=================================");
    // return;
    const item = await Item.create({
      title,
      description,
      category,
      trader: req.user, // ag pipeline
      tradeWith: req.user, // ag pipeline
      price,
      discount,
      discountedPrice: price - discount,
      prodImage: uploadResult.url,
      isAvailable,
    });

    const isItemAdded = await Item.findById(item._id);
    console.log("--------------------------");
    console.log("--------------------------");
    console.log(isItemAdded);
    console.log("--------------------------");
    console.log("--------------------------");

    if (!isItemAdded) throw new ApiErrorHandler(500, "Item not added to DB");

    res.status(201).json(
      new ApiResponseHandler(200, {
        message: "Item added successfully to DB",
        item,
      })
    );
  }
);

export { addItem };
