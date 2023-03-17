import Story from "../models/story.js";
// import User from "../models/users.js";
// import jwt from "jsonwebtoken";

// const TOKEN_KEY = process.env.TOKEN_KEY;

export async function GetStory(req, res) {
  const story = await Story.find();
  return res.json(story);
}

export async function GetStoryById(req, res) {
  const id = req.params.id;
  const story = await Story.findById(id).populate("user");
  return res.json(story);
}

export async function CreateStory(req, res) {
  const story = new Story(req.body);
  await story.save();
  res.status(201).json(story);
}

export async function UpdateStory(req, res) {
  const id = req.params.id;
  const story = Story.findByIdAndUpdate(id, req.body);
  res.status(201).json(story);
}
