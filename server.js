const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);
const bd = mongoose.connection;

bd.on('error', console.error.bind(console, 'connection error:'));
bd.once('open', () => console.log('🌍 Connected to Database'));

app.use(express.json());

app.listen(3000, () => console.log('🌍 Now listening'));
