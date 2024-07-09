// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/Blog_Database')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
