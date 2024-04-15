require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    // Database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    const connection = mongoose.connection;

    // Event listener for successful connection
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    });

    // Event listener for connection errors
    connection.on('error', (err) => {
        console.error('Connection error:', err);
    });
}

module.exports = connectDB;