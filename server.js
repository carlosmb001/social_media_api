const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/social_media_db');

app.listen(3000, () => console.log('🌍 Now listening'));