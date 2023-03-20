import { Router } from "express";
import * as storyController from "../controllers/story.js";

const router = Router();

router.get("/", storyController.GetStories);
router.get("/:id", storyController.GetStoryById);
router.post("/", storyController.CreateStory);
router.put("/:id", storyController.UpdateStory);
router.get("/gallery/", storyController.GetFinishedStories);

export default router;
