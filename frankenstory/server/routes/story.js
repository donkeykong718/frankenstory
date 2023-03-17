import { Router } from "express";
import * as storyController from "../controllers/story.js";

const router = Router();

router.get("/", storyController.GetStory);
router.post("/", storyController.CreateStory);
router.get("/:id", storyController.GetStoryById);
router.put("/:id", storyController.UpdateStory);

export default router;
