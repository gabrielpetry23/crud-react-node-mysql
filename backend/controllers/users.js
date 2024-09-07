import { db } from "../db.js"; //import o mysql

export const getUsers = async (req, res) => {
  const query = "SELECT * FROM users";

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.json("Nenhum dado encontrado");
    
    return res.status(200).json(data);
  });

};

export const addUser = (req, res) => {
  const query = 'INSERT INTO users (`nome`, `email`, `telefone`, `data_nascimento`) VALUES (?)';

  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.data_nascimento,
  ]

  db.query(query, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Usuário adicionado com sucesso");
  });
};

export const updateUser = (req, res) => {
  const query = 'UPDATE users SET `nome` = ?, `email` = ?, `telefone` = ?, `data_nascimento` = ? WHERE `id` = ?';

  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.data_nascimento,
  ]

  db.query(query, [...values, req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Usuário atualizado com sucesso");
  });
};

export const deleteUser = (req, res) => {
  const query = 'DELETE FROM users WHERE `id` = ?';

  db.query(query, [req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Usuário deletado com sucesso");
  });
}