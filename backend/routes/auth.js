const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Make sure the path is correct
const router = express.Router();

// User Registration (Signup)
router.post("/register", async (req, res) => {
  const { name, email, password, username } = req.body;

  console.log(req.body); // Check what data you're receiving

  try {
    // Check if all required fields are provided
    if (!name || !email || !password || !username) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    user = new User({
      name,
      email,
      password: hashedPassword,
      username, // Include the username
    });

    await user.save();

    // Return success response
    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err); // Log the full error
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
