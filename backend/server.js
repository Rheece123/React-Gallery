const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const imageRouter = require('./routes/images');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB database connection established'));

app.use(cors());
app.use(express.json());
app.use('/images', imageRouter);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
