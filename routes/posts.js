const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/", postController.getPosts);

router.get("/:id", postController.getPost);

router.post("/", postController.createPost);

router.delete("/:id", postController.deletePost);

router.patch("/:id", postController.updatePost);

module.exports = router;
