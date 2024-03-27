export interface Categoria {
    id: number;
    nome: string;
    cor: string;
}

export const categorias: Categoria[] = [
    { id: 1, nome: 'Trabalho', cor: '#ff7f0e' },
    { id: 2, nome: 'Estudo', cor: '#2ca02c' },
    { id: 3, nome: 'Lazer', cor: '#1f77b4' }
];
