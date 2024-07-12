import { Router } from "express";
import { registerUser } from "../controllers/user.controller";
import { uploadImage } from "../middlewares/multer.middleware";

const router = Router();

// POST api/v1/users/register
router.route("/register").post(uploadImage.single("avatar"), registerUser);

export default router;
