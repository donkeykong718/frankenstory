import { Router } from "express";
import * as userController from "../controllers/users.js";

const userRouter = Router();

userRouter.get("/:search", userController.getUser);
userRouter.post("/sign-up", userController.signUp);
userRouter.post("/sign-in", userController.signIn);
userRouter.get("/verify", userController.verify);
userRouter.post("/change-password", userController.changePassword);

export default userRouter;
