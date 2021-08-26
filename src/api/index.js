const express = require('express');
const cors = require('cors');
const {
  store, login, edit, find, favoritesUser,
} = require('../controllers/UserController');
const { favorite, disfavor } = require('../controllers/UserCharacterController');
const { favoriteComic, disfavorComics } = require('../controllers/UserComicController');

const app = express();

app.use(cors());
app.use(express.json());

app.put('/edit', edit);
app.post('/login', login);
app.post('/register', store);
app.post('/find', find);
app.post('/favorites', favoritesUser);
app.post('/character/favorite', favorite);
app.post('/character/disfavor', disfavor);
app.post('/comic/favorite', favoriteComic);
app.post('/comic/disfavor', disfavorComics);

module.exports = app;
