import react from "react";
import styled from "styled-components";
import { useRef } from "react";

const FormContainer = styled.div`
  display: flex;
  align-items: flex-end; //alinhados tudo em baixo
  gap: 10px;
  flex-wrap: wrap; //responsivo pra itens se ajustar para baixo
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 40px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;

  &:hover {
    background-color: #2c73d2;
  }
`;

const Form = ({ onEdit }) => {
  const ref = useRef();

  return (
    <FormContainer ref={ref}>
      <InputArea>
        <Label>Name</Label>
        <Input name="name" />
      </InputArea>
      <InputArea>
        <Label>Email</Label>
        <Input type="email" name="email" />
      </InputArea>
      <InputArea>
        <Label>Phone</Label>
        <Input name="phone" />
      </InputArea>
      <InputArea>
        <Label>Birth Date</Label>
        <Input type="date" name="birth_date" />
      </InputArea>

      <Button type='submit'>Save</Button>
    </FormContainer>
  );
};

export default Form;
