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

app.get("/posts", (req, res) => {
  return res.send(posts);
});

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = posts.find((post) => post.id == id);
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

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  posts = posts.filter((post) => post.id != id);
  return res.send(posts);
});

app.patch("/posts/:id", (req, res) => {
  const id = req.params.id;
  const newTitle = req.body.title;
  const newContent = req.body.content;
  posts = posts.map((post) => {
    if (post.id == id) {
      return { ...post, title: newTitle, content: newContent };
    } else {
      return post;
    }
  });
  return res.send(posts);
});
