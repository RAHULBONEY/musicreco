const express = require("express");
const cors = require("cors");
const axios = require("axios"); // For making HTTP requests

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/api/recommend", async (req, res) => {
  const genre = req.query.genre;

  try {
    // Make a request to the Python service
    const response = await axios.get(
      `http://localhost:5001/recommend?genre=${genre}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching recommendation:", error);
    res.status(500).json({ error: "Failed to get recommendation" });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
