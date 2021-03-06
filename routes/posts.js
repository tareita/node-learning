const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const auth = require("../middleware/auth");

router.get("/", postController.getPosts);

router.get("/:id", postController.getPost);

router.post("/", auth.verifyToken, postController.createPost);

router.delete("/:id", auth.verifyToken, postController.deletePost);

router.patch("/:id", auth.verifyToken, postController.updatePost);

module.exports = router;
