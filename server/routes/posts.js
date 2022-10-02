const express = require("express");
const {
  getAllPosts,
  createNewPost,
  getPostById
} = require("../controllers/PostsController");

const router = express();

router.route("/").get(getAllPosts).post(createNewPost);
router.route("/:id").get(getPostById);

module.exports = router;
