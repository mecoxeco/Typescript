import { Router } from 'express'
import bookController from './src/books/book.controller'

const router = Router()

// Rotas para CRUD de livros
router.get('/books', bookController.getAll)
router.post('/books', bookController.create)
router.get('/books/:id', bookController.getById)
router.put('/books/:id', bookController.update)
router.delete('/books/:id', bookController.delete)

export default router