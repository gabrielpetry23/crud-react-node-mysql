import styled from "styled-components";

const Th = styled.th`
   text-align: start;
   border-bottom: inset;
   padding-bottom: 5px;

   @media (max-width: 500px) {
    ${(props) => props.onlyWeb && 'display: none;'} //< 500px item com onlyWeb não aparece 
   }
`;

export default Th;