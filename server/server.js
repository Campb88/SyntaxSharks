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

// -------------------
// User Model & Endpoints
// -------------------

// Define a User model
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", UserSchema);

// Signup endpoint
app.post("/api/signup", async (req, res) => {
  console.log("Received signup POST request");
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }
  // Check for existing user
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
    const newUser = new User({ username, email, password: hashedPassword });
    try {
      await newUser.save();
      res.status(201).json({ message: "Signup successful." });
    } catch (error) {
      console.error("Error saving user:", error);
      res.status(500).json({ error: "Error saving user" });
    }
  });
});

// Login endpoint using "identifier" (email or username)
app.post("/api/login", async (req, res) => {
  console.log("Received login POST request");
  const { identifier, password } = req.body;
  if (!identifier || !password) {
    return res.status(400).json({ error: "Identifier and password are required." });
  }
  try {
    let user;
    if (identifier.includes("@")) {
      user = await User.findOne({ email: identifier });
    } else {
      user = await User.findOne({ username: identifier });
    }
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const tokenPayload = { username: user.username, email: user.email };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful", token, user: tokenPayload });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// -------------------
// Authentication Middleware
// -------------------

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Access denied" });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user;
    next();
  });
}

// -------------------
// Trip & Places Models and Endpoints
// -------------------

// Define a Trip model with embedded places and itinerary array
const ItineraryItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String }
}, { _id: true });

const PlaceSchema = new mongoose.Schema({
  googlePlaceId: { type: String },
  name: { type: String, required: true },
  priceLevel: { type: Number },
  rating: { type: Number },
  icon: { type: String },
  itinerary: [ItineraryItemSchema]
}, { _id: true });

const TripSchema = new mongoose.Schema({
  title: { type: String, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
  description: { type: String },
  userEmail: { type: String, required: true },
  places: [PlaceSchema]
});
const Trip = mongoose.model("Trip", TripSchema);

// Create a new trip
app.post("/api/trips", authenticateToken, async (req, res) => {
  const { title, startDate, endDate, description } = req.body;
  if (!title) return res.status(400).json({ error: "Trip title is required." });
  try {
    const newTrip = new Trip({
      title,
      startDate,
      endDate,
      description,
      userEmail: req.user.email,
      places: [],
    });
    await newTrip.save();
    res.status(201).json({ message: "Trip created successfully", trip: newTrip });
  } catch (error) {
    res.status(500).json({ error: "Error creating trip" });
  }
});

// Get all trips for the logged-in user
app.get("/api/trips", authenticateToken, async (req, res) => {
  try {
    const trips = await Trip.find({ userEmail: req.user.email });
    res.status(200).json({ trips });
  } catch (error) {
    res.status(500).json({ error: "Error fetching trips" });
  }
});

// Get a specific trip (with places)
app.get("/api/trips/:tripId", authenticateToken, async (req, res) => {
  const { tripId } = req.params;
  try {
    const trip = await Trip.findOne({ _id: tripId, userEmail: req.user.email });
    if (!trip) return res.status(404).json({ error: "Trip not found" });
    res.status(200).json({ trip });
  } catch (error) {
    res.status(500).json({ error: "Error fetching trip" });
  }
});

// Add a new place to a trip (no address required)
app.post("/api/trips/:tripId/places", authenticateToken, async (req, res) => {
  const { tripId } = req.params;
  const { googlePlaceId, name, priceLevel, rating, icon } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Place name is required." });
  }
  try {
    const trip = await Trip.findOne({ _id: tripId, userEmail: req.user.email });
    if (!trip) return res.status(404).json({ error: "Trip not found" });
    const newPlace = { googlePlaceId, name, priceLevel, rating, icon, itinerary: [] };
    trip.places.push(newPlace);
    await trip.save();
    res.status(201).json({ message: "Place added successfully", trip });
  } catch (error) {
    res.status(500).json({ error: "Error adding place to trip" });
  }
});

// Update a place (for example, update the place's name)
app.put("/api/trips/:tripId/places/:placeId", authenticateToken, async (req, res) => {
  const { tripId, placeId } = req.params;
  try {
    const trip = await Trip.findOne({ _id: tripId, userEmail: req.user.email });
    if (!trip) return res.status(404).json({ error: "Trip not found" });
    const place = trip.places.id(placeId);
    if (!place) return res.status(404).json({ error: "Place not found" });
    Object.assign(place, req.body);
    await trip.save();
    res.status(200).json({ message: "Place updated successfully", trip });
  } catch (error) {
    res.status(500).json({ error: "Error updating place" });
  }
});

// Delete a place from a trip
app.delete("/api/trips/:tripId/places/:placeId", authenticateToken, async (req, res) => {
  const { tripId, placeId } = req.params;
  try {
    const trip = await Trip.findOne({ _id: tripId, userEmail: req.user.email });
    if (!trip) return res.status(404).json({ error: "Trip not found" });
    // Use pull to remove the place
    trip.places.pull(placeId);
    await trip.save();
    res.status(200).json({ message: "Place deleted successfully", trip });
  } catch (error) {
    console.error("Error deleting place:", error);
    res.status(500).json({ error: "Error deleting place" });
  }
});

// ---------- Itinerary Item Endpoints ----------

// Add an itinerary item to a place
app.post("/api/trips/:tripId/places/:placeId/itinerary", authenticateToken, async (req, res) => {
  const { tripId, placeId } = req.params;
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: "Itinerary item title is required" });
  try {
    const trip = await Trip.findOne({ _id: tripId, userEmail: req.user.email });
    if (!trip) return res.status(404).json({ error: "Trip not found" });
    const place = trip.places.id(placeId);
    if (!place) return res.status(404).json({ error: "Place not found" });
    place.itinerary.push({ title, description });
    await trip.save();
    res.status(201).json({ message: "Itinerary item added successfully", trip });
  } catch (error) {
    res.status(500).json({ error: "Error adding itinerary item" });
  }
});

// Update an itinerary item for a place
app.put("/api/trips/:tripId/places/:placeId/itinerary/:itemId", authenticateToken, async (req, res) => {
  const { tripId, placeId, itemId } = req.params;
  const { title, description } = req.body;
  try {
    const trip = await Trip.findOne({ _id: tripId, userEmail: req.user.email });
    if (!trip) return res.status(404).json({ error: "Trip not found" });
    const place = trip.places.id(placeId);
    if (!place) return res.status(404).json({ error: "Place not found" });
    const itineraryItem = place.itinerary.id(itemId);
    if (!itineraryItem) return res.status(404).json({ error: "Itinerary item not found" });
    if (title) itineraryItem.title = title;
    if (description !== undefined) itineraryItem.description = description;
    await trip.save();
    res.status(200).json({ message: "Itinerary item updated successfully", trip });
  } catch (error) {
    res.status(500).json({ error: "Error updating itinerary item" });
  }
});

// Delete an itinerary item from a place
app.delete("/api/trips/:tripId/places/:placeId/itinerary/:itemId", authenticateToken, async (req, res) => {
  const { tripId, placeId, itemId } = req.params;
  try {
    const trip = await Trip.findOne({ _id: tripId, userEmail: req.user.email });
    if (!trip) return res.status(404).json({ error: "Trip not found" });
    const place = trip.places.id(placeId);
    if (!place) return res.status(404).json({ error: "Place not found" });
    // Use pull to remove the itinerary item
    place.itinerary.pull(itemId);
    await trip.save();
    res.status(200).json({ message: "Itinerary item deleted successfully", trip });
  } catch (error) {
    console.error("Error deleting itinerary item:", error);
    res.status(500).json({ error: "Error deleting itinerary item" });
  }
});
const PORT = process.env.PORT || 5713;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});