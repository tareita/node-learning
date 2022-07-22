const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    return res.send("user with same credentials exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    username,
    email,
    password: hashedPassword,
  });
  await user.save();
  const token = jwt.sign({ id: _id }, process.env.SECRET_KEY);
  return res.send({ user, token });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    return res.send("user does not exist");
  }
  const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordValid) {
    return res.send("wrong password");
  }
  const token = jwt.sign({ id: _id }, process.env.SECRET_KEY);
  return res.send({ user: existingUser, token });
};

module.exports = { register, login };
