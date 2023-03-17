import mongoose from "mongoose";

// In the story schema, we don't need an active and completed
// have completed be true or false
// change active to a number add a limit that goes from 1 to 8 to show what turn the person is in
// change to see what turn the story you are in out of the turns you are in

const frameSchema = new mongoose.Schema({
  text: { type: String },
  img: { type: String },
  prompt: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  inProgress: { type: Boolean, default: true },
});

const storySchema = new mongoose.Schema({
  frames: [frameSchema, frameSchema, frameSchema, frameSchema],
  turn: { type: Number, min: 1, max: 8 },
  // Try to implement turn logic on frontend if possible
  completed: { type: Boolean, default: false },
});

const Story = mongoose.model("Story", storySchema);

export default Story;
