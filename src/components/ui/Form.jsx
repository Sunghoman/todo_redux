import styled from "styled-components";
import STInput from "../input/input.style";
import FormBtn from "../button/submit.styled";

import { addTodo } from "../../redux/modules/todos";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";

const Form = () => {

  const dispatch = useDispatch();

  // id값인데, 객체로 비교해줄거임
  const nextId = useRef(2)

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
    e.preventDefault();
    if (title && body) {
      dispatch(addTodo({
        id: nextId.current,
        title,
        body,
        isDone: false
      }));
      console.log(nextId)
      nextId.current ++
    }
    // setInputs({
    //   title: '',
    //   body: ''
    // })
  }


  return(
      <TodoForm onSubmit={onSubmit}>
        <div className="material_input">      
          <STInput
            type="text"
            defaultValue={title}
            autoComplete="off"
            name='title'
            onChange={onChange}
          />
          <span className="bar"></span>
          <label>Title</label>
        </div>

        <div className="material_input">      
          <STInput
            type="text"
            defaultValue={body}
            autoComplete="off"
            name='body'
            onChange={onChange}
          />
          <span className="bar"></span>
          <label>Content</label>
        </div>
        <FormBtn>버튼임</FormBtn>
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