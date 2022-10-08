import styled from "styled-components";

const ToggleBtn = styled.button`
  border: none;
  outline: none;
  width: 100px;
  height: 30px;
  margin: auto;
  display: block;
  background-color: tomato;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(0.9);
  }
`
export default ToggleBtn;