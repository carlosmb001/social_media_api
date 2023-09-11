const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`🌍 Now listening to ${PORT}\n🌍 Connected to Database`);
    });
});
