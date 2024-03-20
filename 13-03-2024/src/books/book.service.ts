import bookModel from './book.schema'

export class BookService {

    async create(book: any) {
        const createdBook = bookModel.create(book)

        return createdBook
    }

    async findById(id: any) {
        const createdBook = bookModel.findById(id)

        return createdBook
    }

    async findAll(book: any) {
        const createdBook = bookModel.find(book)

        return createdBook
    }

    async update(id: any) {
        const updatedBook = bookModel.updateOne(id)

        return updatedBook
    }

    async delete(id: any) {
        const deletedBook = bookModel.deleteOne(id)
        
        return deletedBook
    }
}
