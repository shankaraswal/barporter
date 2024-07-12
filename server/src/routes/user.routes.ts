import { Router } from "express";
import {
  userRegistration,
  userList,
  userDetail,
} from "../controllers/user.controller";
import { uploadImage } from "../middlewares/multer.middleware";

const router = Router();

// GET api/v1/users/test
router.route("/list").get(userList);
router.route("/detail/:id").get(userDetail);

// POST api/v1/users/register
router.route("/register").post(uploadImage.single("avatar"), userRegistration);

export default router;
