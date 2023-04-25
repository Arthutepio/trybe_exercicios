import { Router } from 'express';
import BooksController from '../controllers/books.controller';
// import validationBook from '../services/book.service';

const router = Router();

const booksController = new BooksController();

const booksSlashId = '/books/:id';

router.get('/books', booksController.getAll);
router.get(booksSlashId, booksController.getById);
router.post('/books', booksController.create);
router.put(booksSlashId, booksController.update);
router.delete(booksSlashId, booksController.remove);

export default router;
