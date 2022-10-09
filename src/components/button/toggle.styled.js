import styled from "styled-components";

const ToggleBtn = styled.button`
  border: none;
  color: whitesmoke;
  box-sizing: border-box;
  margin: 0; 
  padding: 0;
  position: relative;
  outline: none;
  width: 120px;
  height: 40px;
  margin: auto;
  display: block;
  background-color: tomato;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(0.9);
  }
`
export default ToggleBtn;