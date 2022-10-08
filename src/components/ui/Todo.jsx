import styled from "styled-components";
import ToggleBtn from "../button/toggle.styled";

const Todo = () => {
  return(
    <TodoItem>

      <div className="todoHeader">
        <h3 className="todoTitle">제목임</h3>
        <h3 className="todoDelete">X</h3>
      </div>

      <div className="todoContent">
        <p>내용임</p>
        <ToggleBtn>완료</ToggleBtn>
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