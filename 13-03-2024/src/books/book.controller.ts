import { Request, Response } from 'express'
import { BookService } from './book.service'

class BookController {
    async create(req: Request, res: Response) {
        let { title, author, ISBN, pageNumber } = req.body;
        
        while (!title || !author || !ISBN || !pageNumber) {
            
            return res.status(400).json({ message: 'Por favor, forneça todos os campos: title, author, ISBN e pageNumber.' });
        }

        const book = await new BookService().create({ title, author, ISBN, pageNumber });
        return res.json(book);
    }

    async getAll(req: Request, res: Response) {
        const books = await new BookService().getAll()
        return res.json(books)
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params
        const book = await new BookService().getById(id)
        return res.json(book)
    }

    async update(req: Request, res: Response) {
        const { id } = req.params
        const updatedBook = await new BookService().update(id, req.body)
        return res.json(updatedBook)
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params
        await new BookService().delete(id)
        return res.sendStatus(204)
    }
}

export default new BookController()
