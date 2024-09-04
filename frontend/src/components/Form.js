import react from "react";
import styled from "styled-components";
import { useRef } from "react";
import Button from "./form-components/Button";
import FormContainer from "./form-components/FormContainer";
import InputArea from "./form-components/InputArea";
import Input from "./form-components/Input";
import Label from "./form-components/Label";

const Form = ({ onEdit }) => {
  const ref = useRef();

  return (
    <FormContainer ref={ref}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>Email</Label>
        <Input type="email" name="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="telefone" />
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input type="date" name="data_nascimento" />
      </InputArea>

      <Button type='submit'>Save</Button>
    </FormContainer>
  );
};

export default Form;
