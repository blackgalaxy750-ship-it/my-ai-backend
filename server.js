const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check
app.get("/", (req, res) => {
    res.status(200).json({
        status: "online",
        message: "My AI Backend is running 🤖"
    });
});

// Test API route
app.get("/api/test", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is working correctly!"
    });
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
