import { Categoria } from "./categoria.model";
import { Usuario } from "./usuario.model";

export interface Tarefa {
    id: number;
    titulo: string;
    descricao: string;
    datacriacao: Date;
    dataconclusao?: Date;
    tipo: string;
    categoria?: Categoria;
    status: 'pendente' | 'em_andamento' | 'concluida';
    usuario: Usuario;
}
