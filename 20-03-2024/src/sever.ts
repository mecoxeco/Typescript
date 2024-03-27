import express from 'express';
import { router as usuarioRouter } from './routes/usuario.router';
import { router as tarefaRouter } from './routes/tarefa.router';
import { router as categoriaRouter } from './routes/categoria.router';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/usuarios', usuarioRouter);
app.use('/tarefas', tarefaRouter);
app.use('/categorias', categoriaRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
