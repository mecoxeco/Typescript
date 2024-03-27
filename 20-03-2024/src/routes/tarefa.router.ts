import express from 'express';
import * as tarefaController from '../controller/tarefa.controller';

export const router = express.Router();

router.post('/', tarefaController.criarTarefa);
router.get('/', tarefaController.listarTarefas);
router.get('/:id', tarefaController.detalhesTarefa);
router.put('/:id', tarefaController.atualizarTarefa);
router.delete('/:id', tarefaController.excluirTarefa);
