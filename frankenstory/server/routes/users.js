import { Router } from "express";
import * as userController from "../controllers/users.js";

const router = Router();

router.post("/sign-up", userController.signUp);
router.post("/sign-in".userController.signIn);
router.get("/verify", userController.verify);
router.post("/change-password", userController.changePassword);

export default router;
