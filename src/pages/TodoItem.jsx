import Header from "../components/ui/Header.jsx";

import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import ToggleBtn from "../components/button/toggle.styled";
import styled from "styled-components";

const TodoItem = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const todoList = useSelector((state) => state.reducer.todos);
  const todos = todoList.find(data => data.id === id);


  return(
    <div>
      <Header/>
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
        <ToggleBtn><span>{ todos.isDone ? "Completed Task!" : "Working Task!" }</span></ToggleBtn>
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