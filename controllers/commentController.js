const Comment = require("../models/Comment");

const createComment = async (req, res) => {
  const { postId, content, author } = req.body;
  const comment = new Comment({
    content: content,
    author: author,
    post: postId,
  });
  await comment.save();

  return res.send({ comment });
};

module.exports = { createComment };
