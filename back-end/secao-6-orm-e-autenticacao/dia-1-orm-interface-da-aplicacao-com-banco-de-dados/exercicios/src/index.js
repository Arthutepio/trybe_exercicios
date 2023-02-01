const express = require('express');
const BookController = require('./controllers/BookController');
const app = express();
const PORT = process.env.PORT || 3001;
 
app.use(express.json());

app.get('/books', BookController.getAll);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));