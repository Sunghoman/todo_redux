import styled from "styled-components";
import ToggleBtn from "../button/toggle.styled";
import { useDispatch } from "react-redux"
import { toggle, remove } from "../../redux/todos/todos";

const Todo = ({ title, body, isDone }) => {
  
  let dispatch = useDispatch();

  return(
    <TodoItem>
      <div className="todoHeader">
        <h3 className="todoTitle">{ title }</h3>
        <h3 
          className="todoDelete"
          onClick={() => {
            dispatch(remove());
          }}
        >X</h3>
      </div>

      <div className="todoContent">
        <p>{ body }</p>
        <ToggleBtn onClick={() => {
          dispatch(toggle());
        }}>{ isDone ? "취소" : "완료" }</ToggleBtn>
      </div>
    </TodoItem>
  )
}

export default Todo;

const TodoItem = styled.div`
  width: 20rem;
  height: 15rem;
  margin: 0px 0px 50px 0px;
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