import styled from "styled-components";
import ToggleBtn from "../button/toggle.styled";

import { useDispatch } from "react-redux";

import { toggleTodo, deleteTodo } from "../../redux/modules/todos";

import { useNavigate } from "react-router-dom";
import SeeMore from "../button/seeMore.styled";

const Todo = ({ todo, i }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onToggle = (id) => dispatch(toggleTodo(id));
  const onDelete = (id) => dispatch(deleteTodo(id));

  return(
    <TodoItem>
      <div className="todoHeader">
        <h3 className="todoTitle">{ todo.title }</h3>
        <h3 
          className="todoDelete"
          onClick={() => {
            onDelete(todo.id);
          }}
        >X</h3>
      </div>

      <div className="todoContent">
      <SeeMore onClick={() => {navigate("/detail/"+ todo.id)}}>더 보기</SeeMore>
        <p>{ todo.body }</p>
        <ToggleBtn 
          onClick={() => {
            onToggle(todo.id)
        }}><span>{ todo.isDone ? "취소" : "완료" }</span></ToggleBtn>
      </div>
    </TodoItem>
  )
}

export default Todo;

const TodoItem = styled.div`
  width: 20rem;
  height: 15rem;
  margin: 0px 0px 50px 0px;
  transition: all 0.5s ease;
  &:hover {
    transform: translateY(-1.5%);
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, .2);
  }
  & .todoHeader {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 10px;
    background: tomato;
    color: azure;
    & .todoTitle {
      float: left;
      padding-left: 10px;
    }
    & .todoDelete {
      padding-right: 10px;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        transform: scale(1.5) translateX(10%);;
      }
    }
  }
  & .todoContent {
    padding: 20px;
    background: white;
  }
`