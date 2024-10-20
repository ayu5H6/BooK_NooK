const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());          

// Import auth routes
const authRoutes = require("./routes/auth");

// Use routes
app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
