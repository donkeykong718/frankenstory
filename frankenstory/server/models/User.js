import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  hash: String,
  email: String,
  drawings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
    },
  ],
});

export default mongoose.model("User", userSchema);
