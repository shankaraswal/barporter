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
    const discountedPrice = price - price * (discount / 100);
    const item = await Item.create({
      title,
      description,
      category,
      trader: req.user, // ag pipeline
      tradeWith: req.user, // ag pipeline
      price,
      discount,
      discountedPrice,
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
// ITEM LIST and SEARCH BY ITEM TITLE
// ---------------------------------------------------------------
const itemList = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { search } = req.query; // Get search query from request query parameters

    // Create a query object based on whether the search parameter is provided
    const query = search ? { title: { $regex: search, $options: "i" } } : {};

    // Find items based on the query object
    const items = await Item.find(query);

    // Fetch users for each item and include them in the item object
    const listItems = await Promise.all(
      items.map(async (item) => {
        const trader = await User.find({ items: item._id });
        return {
          ...item.toObject(),
          trader: trader,
          tradeWith: trader,
        };
      })
    );

    return res.status(200).json(
      new ApiResponseHandler(200, {
        message: `${
          search ? "Search" : "Item"
        } list data retrieved successfully`,
        count: listItems.length,
        itemList: listItems,
      })
    );
  }
);

// ---------------------------------------------------------------
// ITEM DETAIL
// ---------------------------------------------------------------
const itemDetail = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const itemData = await Item.findById(req.params.id).populate(
      "trader tradeWith",
      "-password -refreshToken"
    );

    if (!itemData) throw new ApiErrorHandler(404, "Item not found");

    return res.status(200).json(
      new ApiResponseHandler(200, {
        message: "Item data retrieved successfully",
        itemDetail: itemData,
      })
    );
  }
);

// ---------------------------------------------------------------
// ITEM LIST BY CATEGORY
// ---------------------------------------------------------------
const itemsByCategory = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const catId = req.params.id;

    const itemsListByCategory = await Item.find({ category: catId });

    // Fetch users for each item and include them in the item object
    const listItems = await Promise.all(
      itemsListByCategory.map(async (item) => {
        const users = await User.find({ items: item._id });
        return {
          ...item.toObject(),
          users,
        };
      })
    );

    return res.status(200).json(
      new ApiResponseHandler(200, {
        message: "Item list data retrieved successfully",
        count: listItems.length,
        itemList: listItems,
      })
    );
  }
);

export { addItem, itemList, itemDetail, itemsByCategory };
