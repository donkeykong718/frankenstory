import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  hash: String,
  email: { type: String, required: true },
  drawings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
