import styled from "styled-components";

const FormBtn = styled.button`
  width: 8rem;
  height: 4rem;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: tomato;
  color: whitesmoke;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-10%);
    box-shadow: 0px 3px 0px 0px rgba(255, 99, 71, 0.266);
  }
`
export default FormBtn;