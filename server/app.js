require("dotenv").config();
// const cron = require('node-cron');

const express = require("express");
const cors = require("cors");

const PostsRoutes = require("./routes/posts");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000"
  })
);

app.use("/posts", PostsRoutes);

try {
  app.listen(4000, () => {
    console.log("Running");
  });
} catch (error) {
  console.log("congrats you hit the error middleware", error.stack);
}
