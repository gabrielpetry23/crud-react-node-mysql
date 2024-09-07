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
    
  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  const handleEdit = async (item) => {
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
              <FaEdit onClick={() => handleEdit(item.id)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
