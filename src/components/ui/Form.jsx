import styled from "styled-components";
import STInput from "../input/input.style";
import FormBtn from "../button/submit.styled";

import { addTodo } from "../../redux/modules/todos";
import { useDispatch } from "react-redux";
import { useState } from "react";
import uuid from 'react-uuid'


const Form = () => {

  const dispatch = useDispatch();

  // input 두 개 한 번에 state로 만듦
  const [inputs, setInputs] = useState({
    title: '',
    body: '',
  });
  const { title, body } = inputs;

  // inputs에 입력된 값 처리
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value // e.target.name: e.target.value 이거랑 똑같은거임
    })
  }

  const onSubmit = (e) => {
    e.preventDefault(); //
    if (title && body) {
      dispatch(addTodo({
        id: uuid(),
        title,
        body,
        isDone: false
      }));
    }
    setInputs({
      title: '',
      body: ''
    })
  }



  return(
      <TodoForm onSubmit={onSubmit}>
        <div className="material_input">      
          <STInput
            type="text"
            value={title}
            autoComplete="off"
            maxLength="15"
            name='title'
            placeholder="제목을 입력하세요"
            onChange={onChange}
          />
          <span className="bar"></span>
          <label>Title</label>
        </div>

        <div className="material_input">      
          <STInput
            type="text"
            value={body}
            autoComplete="off"
            maxLength='40'
            placeholder="내용을 입력하세요"
            name='body'
            onChange={onChange}
          />
          <span className="bar"></span>
          <label>Content</label>
        </div>
        <FormBtn>추가하기</FormBtn>
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