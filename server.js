const express = require('express');
const path = require('path'); // Make sure to require the 'path' module
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/items');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api/items', itemRoutes);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));