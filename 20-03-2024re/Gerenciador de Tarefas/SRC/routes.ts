import express from 'express';
import userRoutes from './router/user.route';
import taskRoutes from './router/task.route';
import categoryRoutes from './router/category.route';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);
router.use('/categories', categoryRoutes);

export default router;
