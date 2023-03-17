import mongoose from "mongoose";

const frameSchema = new mongoose.Schema({
  text: { type: String },
  img: { type: String },
  prompt: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  inProgress: { type: Boolean, default: true },
});

const Frame = mongoose.model("Frame", frameSchema);

export default Frame;
