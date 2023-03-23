import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { isValidObjectId } from "mongoose";

// In controllers/users.js
const SALT_ROUNDS = 11;
const TOKEN_KEY = process.env.TOKEN_KEY;

function getExpiration() {
  const d = new Date();
  d.setMinutes(d.getMinutes() + 30);
  return d.getTime();
}

export const getUser = async (req, res) => {

  const search = req.params.search;
  if (isValidObjectId(search) === true) {
    const user = await User.findById({ '_id': search })
    return res.json(user);
  }
  else {
    const user = await User.findOne({ 'username': search });
    return res.json(user);
  }
  
};

// function for sign-up route
export const signUp = async (req, res) => {
  const { email, username, password } = req.body;

  if (!username || !password) {
    console.log("no username or emaip");
    return res
      .status(400)
      .json({ message: "Please provide a username and password" });
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.json({ message: "Username already registered" });
  }

  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  const user = await User.create({
    username,
    email,
    hash,
  });

  const data = {
    id: user._id,
    username: user.username,
    email: user.email,
    exp: getExpiration(),
  };

  const token = jwt.sign(data, TOKEN_KEY);
  return res.json(token);

  // try {
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Server error" });
  // }
};

// function for sign-in routeexport const signIn = async (req, res) => {
export const signIn = async (req, res) => {
  const { username, password } = req.body;

  // try {
  const user = await User.findOne({ username: username });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.hash);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const payload = {
    userId: user._id,
    username: user.username,
    email: user.email,
    exp: getExpiration(),
  };

  const token = jwt.sign(payload, TOKEN_KEY);
  res.status(200).json({ token });
};

// }
// if (!user.isVerified) {
//   return res.status(401).json({ message: "User not verified" });
// }

// } catch (error) {
//   console.error(error);
//   res.status(500).json({ message: "Server error" });
// }

// function for verify route
export const verify = async (req, res) => {
  // Your code to handle email verification logic
  // For example, update the user's email verification status in your database
  const token = req.headers.authorization.split(" ")[1];

  // if (!token) {
  //   return res.status(400).json({ message: "Token not provided" });
  // }

  // try {
  const decodedToken = jwt.verify(token, TOKEN_KEY);
  // const user = await User.findById(decodedToken.id);
  if (decodedToken) {
    res.json(decodedToken);
  }

  // if (!user) {
  //   return res.status(400).json({ message: "User not found" });
  // }

  // if (user.isVerified) {
  //   return res.status(400).json({ message: "User already verified" });
  // }

  // user.isVerified(true);
  // await user.save();
  // res.status(200).json({ message: "User verified" });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Server error" });
  // }
};

// function for change-password route
export const changePassword = async (req, res) => {
  // Your code to handle change-password logic
  // For example, update the user's password in your database

  const { handle, oldPassword, newPassword } = req.body;

  if (!handle || !oldPassword || !newPassword) {
    return res.status(400).json({
      message: "Please provide your handle, old password, and new password",
    });
  }

  try {
    const user = await User.findOne({ handle });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    constisMatch = await bcrypt.compare(oldPassword, user.hash);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const newHash = await bcrypt.compare(newPassword, 10);
    user.hash = newHash;
    await user.save();

    res.status(200).json({ message: "Password updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
