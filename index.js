const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("server started");
});

app.use(express.json());

const items = [];

app.get("/items", (req, res) => {
  return res.send(items);
});

app.post("/items", (req, res) => {
  const text = req.body.text;
  items.push(text);
  return res.send("added item: " + text);
});
