import styled from "styled-components";
import Table from "./grid-components/Table";
import Th from "./grid-components/Th";
import Td from "./grid-components/Td";
import Tbody from "./grid-components/Tbody";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

export const Thead = styled.thead``;
export const Tr = styled.tr``;

const Grid = ({ users, setUsers, setOnEdit }) => {

  // Função para deletar usuário com async/await e tratamento de erro
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete("http://localhost:8800/" + id);
      
      // Atualiza o estado removendo o usuário deletado
      const newArray = users.filter((user) => user.id !== id);
      setUsers(newArray);
      
      // Exibe mensagem de sucesso
      toast.success(data);
    } catch (error) {
      // Exibe mensagem de erro
      toast.error("Erro ao deletar o usuário");
    }

    // Limpa o campo de edição (se houver)
    setOnEdit(null);
  };

  // Função para editar usuário
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>E-mail</Th>
          <Th onlyWeb>Telefone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="30%" onlyWeb>
              {item.telefone}
            </Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} style={{ cursor: "pointer" }} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} style={{ cursor: "pointer" }} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
