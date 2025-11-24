require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' })); // Accept base64 images

// app.use('');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error('MongoDB connection error:', err));
