import { Router } from "express";
import { verifyJWToken, uploadImage } from "../middlewares";
import { addItem } from "../controllers";

const router = Router();

// SECURE ROUTES: items
router
  .route("/add")
  .post(verifyJWToken, uploadImage.single("prodImage"), addItem);

export default router;
