const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

// Routes
const appointmentRoutes = require('./routes/appointments');
app.use('/api/appointments', appointmentRoutes);

const queueRoutes = require('./routes/queue');
app.use('/api/queue', queueRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('QueueLess Campus API running');
});

// Student ID endpoint for HD task
app.get('/api/student', (req, res) => {
    res.json({
        name: 'Sadeepa Bandara Marasinghe Mudiyanselage',
        studentId: 's224779675',
    });
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
