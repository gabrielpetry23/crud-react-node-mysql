import styled from "styled-components";
import Table from "./grid-components/Table";
import Th from "./grid-components/Th";
import Td from "./grid-components/Td";
import Tbody from "./grid-components/Tbody";
import { FaEdit, FaTrash } from "react-icons/fa";

export const Thead = styled.thead``;
export const Tr = styled.tr``;

const Grid = ({ users }) => {
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
                    <Tr key={i} >
                        <Td width='30%'>{item.nome}</Td>
                        <Td width='30%'>{item.email}</Td>
                        <Td width='30%' onlyWeb>{item.telefone}</Td>
                        <Td alignCenter width='5%'>
                            <FaEdit />
                        </Td>
                        <Td alignCenter width='5%'>
                            <FaTrash/>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;