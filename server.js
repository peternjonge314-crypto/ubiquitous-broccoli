require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ 
        message: 'Welcome to the API'
    });
     });

     app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
     });

     app.listen (PORT,() => {
        console.log(`Server listening at http://localhost:${PORT}`);
     });

     const connectDB = async () => {
        try {
            const conn = await mongoose.connect(process.env.MONGODB_URI);
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        } catch (error) {
            console.error(`Error connecting to MongoDB: ${error.message}`);
            process.exit(1);
        }
    }
    connectDB();