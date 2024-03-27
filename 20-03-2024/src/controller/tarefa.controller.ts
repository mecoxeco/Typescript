import { Request, Response } from 'express';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.sqlite');

export const criarTarefa = (req: Request, res: Response) => {
    const tarefa = req.body;
    const { titulo, descricao, dataCriacao, tipo, status, usuarioId, categoriaId } = tarefa;
    db.run('INSERT INTO tarefas (titulo, descricao, data_criacao, tipo, status, usuario_id, categoria_id) VALUES (?, ?, ?, ?, ?, ?, ?)', 
    [titulo, descricao, dataCriacao, tipo, status, usuarioId, categoriaId], function(err) {
        if (err) {
            return res.status(500).send('Erro ao criar tarefa.');
        }
        res.status(201).send('Tarefa criada com sucesso.');
    });
};

export const listarTarefas = (req: Request, res: Response) => {
    db.all('SELECT * FROM tarefas', (err, rows) => {
        if (err) {
            return res.status(500).send('Erro ao listar tarefas.');
        }
        res.status(200).json(rows);
    });
};

export const detalhesTarefa = (req: Request, res: Response) => {
    const { id } = req.params;
    db.get('SELECT * FROM tarefas WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).send('Erro ao obter detalhes da tarefa.');
        }
        if (!row) {
            return res.status(404).send('Tarefa não encontrada.');
        }
        res.status(200).json(row);
    });
};

export const atualizarTarefa = (req: Request, res: Response) => {
    const { id } = req.params;
    const tarefa = req.body;
    const { titulo, descricao, dataCriacao, dataConclusao, tipo, status, usuarioId, categoriaId } = tarefa;
    db.run('UPDATE tarefas SET titulo = ?, descricao = ?, data_criacao = ?, data_conclusao = ?, tipo = ?, status = ?, usuario_id = ?, categoria_id = ? WHERE id = ?', 
    [titulo, descricao, dataCriacao, dataConclusao, tipo, status, usuarioId, categoriaId, id], function(err) {
        if (err) {
            return res.status(500).send('Erro ao atualizar tarefa.');
        }
        res.status(200).send('Tarefa atualizada com sucesso.');
    });
};

export const excluirTarefa = (req: Request, res: Response) => {
    const { id } = req.params;
    db.run('DELETE FROM tarefas WHERE id = ?', [id], function(err) {
        if (err) {
            return res.status(500).send('Erro ao excluir tarefa.');
        }
        res.status(200).send('Tarefa excluída com sucesso.');
    });
};
