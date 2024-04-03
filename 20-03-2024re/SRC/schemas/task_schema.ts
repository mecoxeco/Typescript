import mongoose, { Schema, Document } from 'mongoose';

export interface Tarefa extends Document {
  titulo: string;
  descricao: string;
  dataCriacao: Date;
  dataConclusao?: Date;
  tipo: string;
  categoria?: mongoose.Types.ObjectId;
  status: 'pendente' | 'em_andamento' | 'concluida';
  usuario: mongoose.Types.ObjectId;
}

const schema: Schema = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
  dataConclusao: { type: Date },
  tipo: { type: String, required: true },
  categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' },
  status: { type: String, enum: ['pendente', 'em_andamento', 'concluida'], default: 'pendente' },
  usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
});

export default mongoose.model<Tarefa>('Tarefa', schema);
