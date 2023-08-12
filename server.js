const express = require('express');
const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// Load config

dotenv.config({path: './config/config.env'})

// connectDB();

const app = express()

app.use('/ticket-tracker', require('./routes/ticket-tracker-list'))

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))