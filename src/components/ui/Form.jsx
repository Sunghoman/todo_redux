import styled from "styled-components";
import STInput from "../input/input.style";
import FormBtn from "../button/submit.styled";

import { useDispatch } from "react-redux"
import { addPost } from "../../redux/todos/todos";

const Form = () => {

  const dispatch = useDispatch();

  return(
      <TodoForm>
        <div className="material_input">      
          <STInput
            type="text"
            autoComplete="off"
            name="title"
          />
          <span className="bar"></span>
          <label>Title</label>
        </div>

        <div className="material_input">      
          <STInput
            type="text"
            autoComplete="off"
            name="body"
          />
          <span className="bar"></span>
          <label>Content</label>
        </div>
        <FormBtn
          onClick={() => {
            dispatch(addPost());
          }}
        >버튼임</FormBtn>
      </TodoForm>
  )
}

export default Form;

const TodoForm = styled.form`
  background-color: transparent;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  & .material_input {
    position: relative; 
    margin-bottom: 45px; 
    margin-top: 12px;
  }
  & label {
    color: #999; 
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all; 
    -moz-transition: 0.2s ease all; 
    -webkit-transition: 0.2s ease all;
  }
`