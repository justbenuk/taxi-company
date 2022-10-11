/* 
imports and required files
*/
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// @desc Register a new user
// @/api/users
// @Public
const registerUser = asyncHandler(async (req, res) => {
  //get the response
  const { email, name, password } = req.body;

  //validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  //see if a the user is already registered
  const usersExists = await User.findOne({ email });
  if (usersExists) {
    res.status(400);
    throw new Error("User is already registered");
  }

  //hash the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  //create the user
  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      totalDays: user.totalDays,
      totalUsed: user.totalUsed,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

//@Desc Login a user
//@Route /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //find the user
  const user = await User.findOne({ email });

  //check if the passwords match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      totalDays: user.totalDays,
      totalUsed: user.totalUsed,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = { registerUser, loginUser };
