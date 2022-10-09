import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";
import ToggleBtn from "../button/toggle.styled";


import { useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/modules/todos";

const TodoItem = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.reducer.todos);
  const todos = todoList.find(data => data.id === Number(id));

  const onToggle = (id) => dispatch(toggleTodo(id));

  return(
    <div>
      <Detail onClick={() => {navigate("/")}}>
        <div className="content">
          <div className="front">
            <h4>id: {todos.id}</h4>
            <h1>{todos.title}</h1>
            <h3>{todos.body}</h3>
          </div>
          <div className="back">
            <h2>메인으로</h2>
          </div>
        </div>
        <hr/>
        <br/>
        {/* <ToggleBtn 
          onClick={() => {
            onToggle(todoList.id)
        }}><span>{ todoList.isDone ? "취소" : "완료" }</span></ToggleBtn> */}
      </Detail>
    </div>
  )
}

export default TodoItem;

const Detail = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  margin: -250px;
  float: left;
  perspective: 500px;
  .content {
    /* position: absolute; */
    width: 100%;
    height: 100%;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
    transition: transform 2s;
    transform-style: preserve-3d;
  }
  &:hover .content {
    transform: rotateY( 180deg );
    transition: transform 1s;
  }
  .front,
  .back {
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    line-height: 100px;
    color: #03446A;
    text-align: center;
    font-size: 20px;
    border-radius: 5px;
    backface-visibility: hidden;
  }
  .back {
    background: tomato;
    font-size: 40px;
    color: white;
    transform: rotateY( 180deg );
    cursor: pointer;
    line-height: 400px;
  }
`