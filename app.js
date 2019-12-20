const express = require('express');
const path = require('path');
const colors = require('colors');
const gameRoutes = require('./routes/game.js');
const app = express();


app.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000 \nLet\'s play a game'.yellow);
});

app.use(express.static(
    path.join(__dirname, 'public')
))

gameRoutes(app)