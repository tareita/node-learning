const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const { Schema } = mongoose;

app.listen(3000, () => {
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

const postSchema = new Schema({
  title: String,
  content: String,
  author: String,
});

const Post = mongoose.model("Post", postSchema);

let posts = [];
let count = 1;

app.get("/posts", async (req, res) => {
  const posts = await Post.find();
  return res.send(posts);
});

app.get("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Post.find({ _id: id });
  return res.send(post);
});

app.post("/posts", async (req, res) => {
  title = req.body.title;
  content = req.body.content;
  author = req.body.author;
  const post = new Post({
    title: title,
    content: content,
    author: author,
  });
  await post.save();
  return res.send("your new post: " + post.title + " " + post.content);
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
