import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  hash: String,
  email: String,
  // password_digest: { type: String, required: true, select: false },
  // isVerified: { type: Boolean, default: false },
  drawings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
    },
  ],
});

export default mongoose.model("User", userSchema);
