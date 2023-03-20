import User from "../models/User.js";
import bcrypt from "bcrypt";

// In controllers/users.js
const TOKEN_KEY = process.env.TOKEN_KEY;
// function for sign-up route
export const signUp = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please provide a username and password" });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already registered" });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      hash,
      handle: username,
    });

    const data = {
      id: user._id,
      handle: user.handle,
      exp: getExpiration(),
    };

    const token = jwt.sign(data, TOKEN_KEY);
    return res.json(token);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// function for sign-in routeexport const signIn = async (req, res) => {
export const signIn = async (req, res) => {
  const { handle, password } = req.body;
  try {
    const user = await User.findOne({ handle });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.hash);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    if (!user.isVerified) {
      return res.status(401).json({ message: "Email not verified" });
    }
    const payload = {
      userId: user._id,
      handle: user.handle,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// function for verify route
export const verify = async (req, res) => {
  // Your code to handle email verification logic
  // For example, update the user's email verification status in your database
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token not provided" });
  }

  try {
    const decodedToken = jwt.verify(token, TOKEN_KEY);
    const user = await User.findById(decodedToken.id);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "User already verified" });
    }

    user.isVerified(true);
    await user.save();
    res.status(200).json({ message: "User verified" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
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
