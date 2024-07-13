import { Router } from "express";
import { verifyJWToken } from "../middlewares/auth.middleware";
import {
  userRegistration,
  userLogin,
  userLogout,
  userList,
  userDetail,
  refreshAccessToken,
  getCurrentUser,
} from "../controllers/user.controller";

import { uploadImage } from "../middlewares/multer.middleware";

const router = Router();

// api/v1/users/test
router.route("/register").post(uploadImage.single("avatar"), userRegistration);
router.route("/login").post(userLogin);

// SECURE ROUTES: users
router.route("/list").get(verifyJWToken, userList);
router.route("/detail/:id").get(verifyJWToken, userDetail);
router.route("/logout").post(verifyJWToken, userLogout);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/current-user").get(verifyJWToken, getCurrentUser);

export default router;
