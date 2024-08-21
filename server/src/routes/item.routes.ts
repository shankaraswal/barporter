import { Router } from "express";
import { verifyJWToken, uploadImage } from "../middlewares";
import {
  addItem,
  itemList,
  itemDetail,
  itemsByCategory,
  addCategory,
  categoryList,
} from "../controllers";

const router = Router();

// SECURE ROUTES: items
router
  .route("/add-item")
  .post(verifyJWToken, uploadImage.array("prodImages"), addItem);
router.route("/list-item").get(itemList);
router.route("/detail-item/:id").get(verifyJWToken, itemDetail);
router.route("/item-by-category/:id").get(itemsByCategory);

router.route("/category-add").post(uploadImage.single("image"), addCategory);

router.route("/category-list").get(categoryList);
export default router;
