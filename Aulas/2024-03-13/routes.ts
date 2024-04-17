import { Router } from 'express'
import bookController from './src/books/book.controller'

const router = Router()
router.get('/books/:id', bookController.findById)
router.post('/books', bookController.create)
router.get('books', bookController.findAll)
router.put('/books/:id', bookController.update)
router.delete('/books/:id', bookController.delete)

export default router