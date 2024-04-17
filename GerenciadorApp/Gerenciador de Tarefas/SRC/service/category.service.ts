import categoryModel from '../schema/category.schema'
import { categoryType } from '../type/category.type'

class categoryService {

    async create(category: categoryType) {
        const createdCategory = await categoryModel.create(category)
        return createdCategory
    }

    async findAll() {
        const foundCategories = await categoryModel.find()
        return foundCategories
    }

    async findById(id: string) {
        const foundCategory = await categoryModel.findById(id)
        return foundCategory
    }

    async update(id: string, category: categoryType) {
        const updatedCategory = await categoryModel.findByIdAndUpdate(id, {
            name: category.name,
            color: category.color
        }, { new: true })

        return updatedCategory
    }

    async delete(id: string) {
        try {
            await categoryModel.findByIdAndDelete(id)
            return "Categoria removida com sucesso"
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover a categoria: ${error}`)
        }
    }

}

export default new categoryService()
