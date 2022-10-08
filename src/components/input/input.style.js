import styled from "styled-components";

const STInput = styled.input`
  background-color: transparent;
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:300px;
  border:none;
  border-bottom:1px solid tomato;
  border-radius: 0px;
  color: aliceblue;
  outline:none;
  &:focus ~ label, 
  &:valid ~ label {
    font-size:14px;
    color:tomato;
    top:-20px;
  }
`
export default STInput