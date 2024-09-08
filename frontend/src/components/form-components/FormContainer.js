import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end; // Alinhados tudo embaixo
  gap: 10px;
  flex-wrap: wrap; // Responsivo para itens se ajustarem para baixo
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.text}; 
  border-radius: 5px;
`;

export default FormContainer;
