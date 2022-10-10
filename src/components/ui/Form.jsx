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

  // const onCreate = (title, content) => dispatch(addTodo(title, content));

  // id값인데, 객체로 비교해줄거임
  // JSON.stringify??
  // const nextId = useRef(2);
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
    // console.log(nextId)
    setInputs({
      title: '',
      body: ''
    })
  }
// 이 코드 문제 있음. router로 다른 페이지 갔다오면, nextId(ref)값이 내가 초기에 설정한 값으로 다시 돌아와버림
// 페이지 이동만 안하면, 문제 없는디...
// redux module에서 더해주어야 할까?
// useRef는 리렌더링 안되니까 id값이 잘 들어가는데,
// 상세페이지로 이동하고 나면, 렌더링이 되니까 초기값으로 돌아오는 듯.
// 근디 리덕스 모듈에서 useRef 못쓰는디....(컴포넌트, 커스텀훅에서만 사용 가능하대여)

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