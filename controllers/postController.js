const Post = require("../models/Post");

const getPosts = async (req, res) => {
  const posts = await Post.find().sort("-createdAt");
  return res.send({ posts });
};

const getPost = async (req, res) => {
  const id = req.params.id;
  const post = await Post.findById(id);
  const comments = await Comment.find({ post: id }).sort("-createdAt");
  return res.send({ post, comments });
};

const createPost = async (req, res) => {
  const { title, content, author } = req.body;
  const post = new Post({
    title: title,
    content: content,
    author: author,
  });
  await post.save();
  return res.send({ post });
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  const post = await Post.findOneAndDelete({ _id: id });
  if (!post) {
    return res.send("post not found");
  }
  return res.send(post);
};

const updatePost = async (req, res) => {
  const id = req.params.id;
  const newTitle = req.body.title;
  const newContent = req.body.content;
  const post = await Post.findOneAndUpdate(
    { _id: id },
    { title: newTitle, content: newContent }
  );
  return res.send(post);
};

module.exports = { getPosts, getPost, createPost, deletePost, updatePost };
