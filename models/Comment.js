const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: String,
    author: String,
    post: {
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);