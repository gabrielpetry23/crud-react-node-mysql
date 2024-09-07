import styled from "styled-components";

const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => props.alignCenter ? 'center' : 'start'}; //se recebe uma props alignCenter, alinha no centro, senão alinha no começo
    width: ${(props) => props.width ? props.width : 'auto'}; //se recebe uma props width, usa ela, senão usa auto

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && 'display: none;'}
    }
`;

export default Td;