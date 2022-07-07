const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("server started");
});

app.use(express.json());

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

app.post("/posts", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const author = req.body.author;
  const post = { title: title, content: content, author: author, id: count };
  count++;
  posts.push(post);
  return res.send("your new post: " + post.title + " " + post.content);
});

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  posts = posts.filter((post) => post.id != id);
  return res.send(posts);
});

app.patch;
