import { Request, Response } from 'express'
import { BookService } from './book.service'

class BookController {
    async create(req: Request, res: Response) {
        const book = await new BookService().create(req.body)
        return res.json(book)
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params
        const book = await new BookService().findById(req.params.id)
        return res.json(book)
    }

    async findAll(req: Request, res: Response) {
        const book = await new BookService().findAll(req.params)
        return res.json(book)
    }

    async update(req: Request, res: Response) {
        const { id } = req.params
        const updatedBook = await new BookService().update(req.params.id)
        return res.json(updatedBook)
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params
        const deletedBook = await new BookService().delete(req.params.id)
        return res.json(deletedBook)
    }
}

export default new BookController()