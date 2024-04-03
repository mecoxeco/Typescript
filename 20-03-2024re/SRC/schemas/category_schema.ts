import mongoose, { Schema, Document } from 'mongoose';

export interface Categoria extends Document {
  nome: string;
  cor: string;
}

const schema: Schema = new Schema({
  nome: { type: String, required: true },
  cor: { type: String, required: true },
});

export default mongoose.model<Categoria>('Categoria', schema);
