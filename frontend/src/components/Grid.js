import styled from "styled-components";
import Table from "./grid-components/Table";
import Th from "./grid-components/Th";
import Td from "./grid-components/Td";
import Tbody from "./grid-components/Tbody";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

export const Thead = styled.thead`
  background-color: ${({ theme }) => theme.tableHeaderBackground};
`;

export const Tr = styled.tr``;

const Icon = styled.div`
  color: ${({ theme, type }) => theme[`icon${type}Color`]};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme, type }) => theme[`icon${type}HoverColor`]};
  }
`;

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
              <Icon type="Edit" onClick={() => handleEdit(item)}>
                <FaEdit />
              </Icon>
            </Td>
            <Td alignCenter width="5%">
              <Icon type="Trash" onClick={() => handleDelete(item.id)}>
                <FaTrash />
              </Icon>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
