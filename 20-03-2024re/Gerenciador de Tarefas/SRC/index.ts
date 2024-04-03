import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './router/user_route.ts';
import taskRoutes from './router/task_route';
import categoryRoutes from './router/category_route';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/usuarios', userRoutes);
app.use('/tarefas', taskRoutes);
app.use('/categorias', categoryRoutes);

// MongoDB init w mongoose
mongoose.connect('mongodb://localhost:27017/gerenciador-de-tarefas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conexão com o MongoDB estabelecida com sucesso!');
  app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
  });
}).catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err.message);
});
