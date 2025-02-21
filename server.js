// Import dependencies
const express = require("express");
const cors = require("cors");

// Create the app
const app = express();
app.use(express.json()); // For parsing JSON requests
app.use(cors()); // To allow requests from different origins

// POST method: Process data and return a response
app.post("/bfhl", (req, res) => {
  const { data } = req.body; // Extract data from request

  // Separate numbers and alphabets
  const numbers = data.filter(item => !isNaN(item)); // Items that are numbers
  const alphabets = data.filter(item => /^[A-Za-z]$/.test(item)); // Items that are single alphabets

  // Find highest alphabet (if any)
  const highest_alphabet = alphabets.sort((a, b) => b.localeCompare(a))[0] ? [alphabets.sort((a, b) => b.localeCompare(a))[0]] : [];

  // Send response
  res.json({
    is_success: true,
    user_id: "john_doe_17091999", // Your user ID here
    email: "john@xyz.com", // Your email here
    roll_number: "ABCD123", // Your roll number here
    numbers,
    alphabets,
    highest_alphabet,
  });
});

// GET method: Return a static operation code
app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
