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
  async (
    req: Request & { user: IUser; files?: Express.Multer.File[] },
    res: Response
  ): Promise<void> => {
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

    const productLocalPaths = req.files?.map((file) => file.path);

    if (!productLocalPaths || productLocalPaths.length === 0) {
      throw new ApiErrorHandler(400, "Please upload at least one image file");
    }

    // Upload all images and get their URLs
    const uploadResults = await Promise.all(
      productLocalPaths.map(imageUploadHandler)
    );
    const prodImages = uploadResults.map((result) => result.url);

    if (!prodImages.every((url) => !!url)) {
      throw new ApiErrorHandler(400, "Failed to upload one or more images");
    }

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
      prodImages,
      isAvailable,
    });

    const isItemAdded = await Item.findById(item._id);

    if (!isItemAdded) throw new ApiErrorHandler(500, "Item not added to DB");

    res.status(201).json(
      new ApiResponseHandler(200, {
        message: "Item added successfully to DB",
        item,
      })
    );
  }
);

// ---------------------------------------------------------------
// ITEM LIST
// ---------------------------------------------------------------
const itemList = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const items = await Item.find({});

    return res.status(200).json(
      new ApiResponseHandler(200, {
        message: "Item list data retrieved successfully",
        data: items,
      })
    );
  }
);
export { addItem, itemList };
