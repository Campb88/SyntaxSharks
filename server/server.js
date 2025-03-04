require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define a User model
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", UserSchema);

// Signup endpoint remains the same
app.post("/api/signup", async (req, res) => {
  console.log("Received signup POST request");
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Check if user already exists by email or username
  const userCheck1 = await User.findOne({ email });
  const userCheck2 = await User.findOne({ username });
  if (userCheck1 || userCheck2) {
    return res.status(400).json({ error: "User already exists" });
  }

  // Hash password and save new user
  bcrypt.hash(password, 10, async (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: "Error hashing password" });
    }

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    try {
      await newUser.save();
      res.status(201).json({ message: "Signup successful." });
    } catch (error) {
      console.error("Error saving user:", error);
      res.status(500).json({ error: "Error saving user" });
    }
  });
});

// Modified Login endpoint using "identifier" (email or username)
app.post("/api/login", async (req, res) => {
  console.log("Received login POST request");
  const { identifier, password } = req.body;
  
  if (!identifier || !password) {
    return res.status(400).json({ error: "Identifier and password are required." });
  }

  try {
    let user;
    // Check if identifier looks like an email
    if (identifier.includes("@")) {
      user = await User.findOne({ email: identifier });
    } else {
      user = await User.findOne({ username: identifier });
    }
    
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    
    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    
    // Generate a JWT token (expires in 1 hour)
    const tokenPayload = {
      username: user.username,
      email: user.email,
    };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: tokenPayload,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5713;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
