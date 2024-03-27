import express from 'express';
import * as categoriaController from '../controller/categoria.controller';

export const router = express.Router();

router.post('/', categoriaController.criarCategoria);
router.get('/', categoriaController.listarCategorias);
router.get('/:id', categoriaController.detalhesCategoria);
router.put('/:id', categoriaController.atualizarCategoria);
router.delete('/:id', categoriaController.excluirCategoria);
