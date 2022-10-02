const Post = require("../models/Posts");

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.createNewPost = async (req, res, next) => {
  const { title, body } = req.body;
  try {
    let post = new Post(title, body);
    post = await post.save();
    console.log(post);
    res.status(201).json("Create new posts route");
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.getPostById = async (req, res, next) => {
  const { postid } = req.query;
  try {
    const [post, _] = await Post.findById(postid);
    console.log(post);
    res.status(200).json(post[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
