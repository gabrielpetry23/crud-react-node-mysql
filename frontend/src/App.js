import GlobalStyle from "./styles/global";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled, { ThemeProvider } from "styled-components";
import Form from "./components/Form";
import Grid from "./components/Grid";
import Container from "./components/app-components/Container";
import { useState, useEffect } from "react";
import axios from "axios";
import { lightTheme, darkTheme } from "./styles/themes";
import Switch from "react-switch";
import { FaSun, FaMoon } from 'react-icons/fa';

const Title = styled.h2`
  text-align: center;
`;

const SwitchWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SwitchIcon = styled.div`
  margin-right: 10px;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <SwitchWrapper>
          <SwitchIcon>
            {theme === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </SwitchIcon>
          <Switch
            onChange={toggleTheme}
            checked={theme === "dark"}
            offColor="#bbb"
            onColor="#333"
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </SwitchWrapper>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
      </Container>
      <ToastContainer autoClose={3000} />
    </ThemeProvider>
  );
}

export default App;
