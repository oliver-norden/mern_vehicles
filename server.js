const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

// Bodyparser middleware
app.use(express.json());

// Connect to MongoDB
const db = config.get('mongoURI'); //DB config

mongoose
    .connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))
mongoose.set('useFindAndModify', false);

// Use routes
app.use('/api/vehicles', require('./routes/api/vehicles'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));