
import express from 'express';
import tarefaController from '../service/task.service';

const router = express.Router();

router.post('/', tarefaController.create); 
router.get('/', tarefaController.findAll); 
router.get('/:id', tarefaController.findById); 
router.put('/:id', tarefaController.update); 
router.delete('/:id', tarefaController.delete); 

export default router;
