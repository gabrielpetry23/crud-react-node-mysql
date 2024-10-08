import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  background-color: ${({ theme }) => theme.tableBackground};
  color: ${({ theme }) => theme.tableText};
  padding: 20px;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.tableShadow};
  border-radius: 5px;
  max-width: 800px;
  margin: 20px auto;
  word-break: break-all;
`;

export default Table;
