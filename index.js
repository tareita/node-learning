const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const { Schema } = mongoose;
const posts = require("./routes/posts");
const comments = require("./routes/comments");
const users = require("./routes/users");

app.listen(4000, () => {
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
app.use(cors());
app.use("/posts", posts);
app.use("/comments", comments);
app.use("/users", users);
