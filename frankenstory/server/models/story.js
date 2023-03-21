import mongoose from "mongoose";

// In the story schema, we don't need an active and completed
// have completed be true or false
// change active to a number add a limit that goes from 1 to 8 to show what turn the person is in
// change to see what turn the story you are in out of the turns you are in

const frameSchema = new mongoose.Schema({
  text: { type: String },
  img: { type: String },
  user: { type: String },
  inProgress: { type: Boolean, default: true },
});

const storySchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false },
  turn: { type: Number, min: 0, max: 8 },
  // There is not a turn when it's completed have it zero or 9
  frames: [{
    text: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      default: null,
    }
  }]
});

// Try to implement turn logic on frontend if possible

export default mongoose.model("Story", storySchema);