const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import the db variable from config/firebase.js
const db = require('./config/firebase');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Welcome to the REST API");
});

// Test Firebase connection
app.get('/test', (req, res) => {
    const ref = db.ref("test");
    ref.set({ message: "Firebase connection secured" })
        .then(() => {
            res.send("Data is written to Firebase");
        })
        .catch((error) => {
            res.status(500).send("Error writing to Firebase: " + error.message);
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});