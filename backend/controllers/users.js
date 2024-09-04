import { db } from "../db.js"; //import o mysql

export const getUsers = async (req, res) => {
  const query = "SELECT * FROM usuarios";

  db.query(query, (err, data) => {
    if (err) return res.json(err); //se tiver erro retorna json com ele
    if (data.length === 0) return res.json("Nenhum dado encontrado"); //se não tiver dados retorna json com mensagem
    
    return res.status(200).json(data); //se não tiver retorna json com os dados/usuarios
  });

};