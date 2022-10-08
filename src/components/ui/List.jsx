import styled from "styled-components";
import Todo from "./Todo";

import { useSelector } from "react-redux";

const List = () => {

  const todos = useSelector(state => state.reducer.todos);

  const workingFilter = todos.filter((todo) => { return todo.isDone === false }).map((todo) => {
    return( <Todo key={todo.id} title={todo.title} body={todo.body} isDone={todo.isDone} />)
  })

  const doneFilter = todos.filter((todo) => { return todo.isDone === true }).map((todo) => {
    return( <Todo key={todo.id} title={todo.title} body={todo.body} isDone={todo.isDone} />)
  })

  return(
    <div>
      <StatusTitle>Working Task</StatusTitle>
      <STList>
        { workingFilter }
      </STList>

      <hr/>
      
      <StatusTitle>Completed Task</StatusTitle>
      <STList>
        { doneFilter }
      </STList>
    </div>
  )
};

export default List;

const STList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const StatusTitle = styled.h2`
  color: tomato;
  padding-left: 50px;
`