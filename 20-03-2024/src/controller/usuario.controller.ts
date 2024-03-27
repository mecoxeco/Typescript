import { Request, Response } from 'express';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.sqlite');

export const criarUsuario = (req: Request, res: Response) => {
    const usuario = req.body;
    const { username, senha, email } = usuario;
    db.run('INSERT INTO usuarios (username, senha, email) VALUES (?, ?, ?)', [username, senha, email], function(err) {
        if (err) {
            return res.status(500).send('Erro ao criar usuário.');
        }
        res.status(201).send('Usuário criado com sucesso.');
    });
};

export const listarUsuarios = (req: Request, res: Response) => {
    db.all('SELECT * FROM usuarios', (err, rows) => {
        if (err) {
            return res.status(500).send('Erro ao listar usuários.');
        }
        res.status(200).json(rows);
    });
};

export const detalhesUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    db.get('SELECT * FROM usuarios WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).send('Erro ao obter detalhes do usuário.');
        }
        if (!row) {
            return res.status(404).send('Usuário não encontrado.');
        }
        res.status(200).json(row);
    });
};

export const atualizarUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = req.body;
    const { username, senha, email } = usuario;
    db.run('UPDATE usuarios SET username = ?, senha = ?, email = ? WHERE id = ?', [username, senha, email, id], function(err) {
        if (err) {
            return res.status(500).send('Erro ao atualizar usuário.');
        }
        res.status(200).send('Usuário atualizado com sucesso.');
    });
};

export const excluirUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    db.run('DELETE FROM usuarios WHERE id = ?', [id], function(err) {
        if (err) {
            return res.status(500).send('Erro ao excluir usuário.');
        }
        res.status(200).send('Usuário excluído com sucesso.');
    });
};
