import styled from "styled-components";

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 35px;
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.inputText}; 
`;

export default Input;
