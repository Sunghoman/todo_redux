import styled from "styled-components";
import Todo from "./Todo";

import { useSelector } from "react-redux";

const List = () => {

  let posts = useSelector((state) => state.todo.todos)
  // console.log(posts)

  const workingFilter = posts.filter((todo) => { return todo.isDone === false }).map((todo) => {
    return( <Todo key={todo.id} title={todo.title} body={todo.body} isDone={todo.isDone} />)
  })

  const doneFilter = posts.filter((todo) => { return todo.isDone === true }).map((todo) => {
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