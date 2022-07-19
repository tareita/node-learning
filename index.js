const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const { Schema } = mongoose;

app.listen(4000, () => {
  console.log("server started");
});

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDB connected");
  }
);

app.use(express.json());
app.use(cors());

const postSchema = new Schema(
  {
    title: String,
    content: String,
    author: String,
  },
  { timestamps: true }
);

const commentSchema = new Schema(
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

const Post = mongoose.model("Post", postSchema);

const Comment = mongoose.model("Comment", commentSchema);

let posts = [];
let count = 1;

app.get("/posts", async (req, res) => {
  const posts = await Post.find().sort("-createdAt");
  return res.send({ posts });
});

app.get("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Post.findById(id);
  const comments = await Comment.find({ post: id }).sort("-createdAt");
  return res.send({ post, comments });
});

app.post("/posts", async (req, res) => {
  const { title, content, author } = req.body;
  const post = new Post({
    title: title,
    content: content,
    author: author,
  });
  await post.save();
  return res.send({ post });
});

app.delete("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Post.findOneAndDelete({ _id: id });
  if (!post) {
    return res.send("post not found");
  }
  return res.send(post);
});

app.patch("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const newTitle = req.body.title;
  const newContent = req.body.content;
  const post = await Post.findOneAndUpdate(
    { _id: id },
    { title: newTitle, content: newContent }
  );
  return res.send(post);
});

app.post("/comments", async (req, res) => {
  const { postId, content, author } = req.body;
  const comment = new Comment({
    content: content,
    author: author,
    post: postId,
  });
  await comment.save();

  return res.send({ comment });
});
