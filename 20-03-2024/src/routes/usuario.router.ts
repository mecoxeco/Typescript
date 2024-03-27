import express from 'express';
import * as usuarioController from '../controller/usuario.controller';

export const router = express.Router();

router.post('/', usuarioController.criarUsuario);
router.get('/', usuarioController.listarUsuarios);
router.get('/:id', usuarioController.detalhesUsuario);
router.put('/:id', usuarioController.atualizarUsuario);
router.delete('/:id', usuarioController.excluirUsuario);
