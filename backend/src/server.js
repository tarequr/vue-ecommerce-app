const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // ✅ load first

const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // if sending form data
// app.use(cors());

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
});
