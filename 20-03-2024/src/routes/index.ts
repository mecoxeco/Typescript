import express from 'express';
import { router as usuarioRouter } from './usuario.router';
import { router as tarefaRouter } from './tarefa.router';
import { router as categoriaRouter } from './categoria.router';

const router = express.Router();

router.use('/usuarios', usuarioRouter);
router.use('/tarefas', tarefaRouter);
router.use('/categorias', categoriaRouter);

export default router;
