"use strict";
const express = require("express");
require("dotenv").config();

let dbConnect = require("./dbConnect");
let userRoutes = require("./routes/userRoutes");
let postRoutes = require("./routes/postRoutes");
let commentRoutes = require("./routes/commentRoutes");
let pokeRoutes = require("./routes/pokeRoutes");
const User = require("./models/user");
const Post = require("./models/post");
const Comment = require("./models/comment");

const app = express();

// associations
User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });

Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

async function init() {
  await User.sync({ alter: true });
  await Post.sync({ alter: true });
  await Comment.sync({ alter: true });
}

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/pokemon", pokeRoutes);
// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
