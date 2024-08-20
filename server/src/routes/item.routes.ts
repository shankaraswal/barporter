import { Router } from "express";
import { verifyJWToken, uploadImage } from "../middlewares";
import { addItem, itemList, itemDetail, itemsByCategory } from "../controllers";

const router = Router();

// SECURE ROUTES: items
router
  .route("/add")
  .post(verifyJWToken, uploadImage.array("prodImages"), addItem);
router.route("/list").get(itemList);
router.route("/detail/:id").get(verifyJWToken, itemDetail);
router.route("/listbycat/:id").get(verifyJWToken, itemsByCategory);
export default router;
