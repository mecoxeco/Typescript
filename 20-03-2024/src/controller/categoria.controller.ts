import { Request, Response } from 'express';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.sqlite');

export const criarCategoria = (req: Request, res: Response) => {
    const categoria = req.body;
    const { nome, cor, usuarioId } = categoria;
    db.run('INSERT INTO categorias (nome, cor, usuario_id) VALUES (?, ?, ?)', [nome, cor, usuarioId], function(err) {
        if (err) {
            return res.status(500).send('Erro ao criar categoria.');
        }
        res.status(201).send('Categoria criada com sucesso.');
    });
};

export const listarCategorias = (req: Request, res: Response) => {
    db.all('SELECT * FROM categorias', (err, rows) => {
        if (err) {
            return res.status(500).send('Erro ao listar categorias.');
        }
        res.status(200).json(rows);
    });
};

export const detalhesCategoria = (req: Request, res: Response) => {
    const { id } = req.params;
    db.get('SELECT * FROM categorias WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).send('Erro ao obter detalhes da categoria.');
        }
        if (!row) {
            return res.status(404).send('Categoria não encontrada.');
        }
        res.status(200).json(row);
    });
};

export const atualizarCategoria = (req: Request, res: Response) => {
    const { id } = req.params;
    const categoria = req.body;
    const { nome, cor, usuarioId } = categoria;
    db.run('UPDATE categorias SET nome = ?, cor = ?, usuario_id = ? WHERE id = ?', [nome, cor, usuarioId, id], function(err) {
        if (err) {
            return res.status(500).send('Erro ao atualizar categoria.');
        }
        res.status(200).send('Categoria atualizada com sucesso.');
    });
};

export const excluirCategoria = (req: Request, res: Response) => {
    const { id } = req.params;
    db.run('DELETE FROM categorias WHERE id = ?', [id], function(err) {
        if (err) {
            return res.status(500).send('Erro ao excluir categoria.');
        }
        res.status(200).send('Categoria excluída com sucesso.');
    });
};
