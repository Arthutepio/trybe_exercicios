const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const moviesPath = path.resolve(__dirname, '/movies.json');

app.get('/movies/:id', async(req, res) => {
  try {
    const movies = await readFile();
    console.log(movies);
    const movie = movies.find(({ id }) => id === Number(req.params.id));
    console.log(movie);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

const readFile = async () => {
  try {
  const data = await fs.readFile(moviesPath);
  return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pode ser lido: ${error}`);
  }
};

module.exports = app;
