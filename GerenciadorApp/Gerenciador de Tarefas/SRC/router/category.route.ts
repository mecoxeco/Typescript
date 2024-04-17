import express from 'express';
import categoryService from '../service/category.service';

const router = express.Router();

router.post('/', categoryService.create);
router.get('/', categoryService.findAll);
router.get('/:id', categoryService.findById);
router.put('/:id', categoryService.update);
router.delete('/:id', categoryService.delete);

export default router;
