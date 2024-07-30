import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    requried: true,
  },
  email: {
    type: String,
    requried: true,
    unique: true,
  },
  password: {
    type: String,
    requried: true,
    minLength: 6,
  },
  blogs: [{ type: mongoose.Types.ObjectId, ref: "Post", required: true }],
});

export default mongoose.model("User", userSchema);
