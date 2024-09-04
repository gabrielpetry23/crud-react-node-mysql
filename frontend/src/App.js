import GlobalStyle from "./styles/global";
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function App() {
  return (
    <>
      <Container>

      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />
      <GlobalStyle />
    </>
  );
}

export default App;