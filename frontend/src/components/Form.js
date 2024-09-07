import { useRef, useEffect } from "react";
import Button from "./form-components/Button";
import FormContainer from "./form-components/FormContainer";
import InputArea from "./form-components/InputArea";
import Input from "./form-components/Input";
import Label from "./form-components/Label";
import axios from "axios";
import { toast } from "react-toastify";

const Form = ({ onEdit, setOnEdit, getUsers }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.telefone.value = onEdit.telefone;
      user.data_nascimento.value = onEdit.data_nascimento;
    } else {
      // Limpa os campos se não houver edição
      const user = ref.current;
      user.nome.value = "";
      user.email.value = "";
      user.telefone.value = "";
      user.data_nascimento.value = "";
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.telefone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos");
    }

    try {
      if (onEdit) {
        // Atualiza usuário existente
        const { data } = await axios.put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          telefone: user.telefone.value,
          data_nascimento: user.data_nascimento.value,
        });
        toast.success(data);
      } else {
        // Cria um novo usuário
        const { data } = await axios.post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          telefone: user.telefone.value,
          data_nascimento: user.data_nascimento.value,
        });
        toast.success(data);
      }

      // Limpa os campos após submissão
      user.nome.value = "";
      user.email.value = "";
      user.telefone.value = "";
      user.data_nascimento.value = "";

      setOnEdit(null);
      getUsers();
    } catch (error) {
      // Trata erros na requisição
      toast.error("Erro ao enviar os dados: " + error.message);
    }
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
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

      <Button type="submit">Salvar</Button>
    </FormContainer>
  );
};

export default Form;
