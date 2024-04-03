import express from 'express';
import userService from '../service/user.service';

const router = express.Router();

router.post('/', userService.create);
router.get('/', userService.findAll);
router.get('/:id', userService.findById);
router.put('/:id', userService.update);
router.delete('/:id', userService.delete);

export default router;
