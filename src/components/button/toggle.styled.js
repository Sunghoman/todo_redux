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
    animation: pulse 1s;
    box-shadow: 0 0 0 2em transparent;
  }
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 var(--hover); }
  }
`
export default ToggleBtn;