import { Router } from "express";
import { verifyJWToken, uploadImage } from "../middlewares";
import { addItem, itemList } from "../controllers";

const router = Router();

// SECURE ROUTES: items
router
  .route("/add")
  .post(verifyJWToken, uploadImage.array("prodImages"), addItem);
router.route("/list").get(verifyJWToken, itemList);
// router.route("/detail/:id").get(verifyJWToken, itemDetail);
export default router;
