import styled from "styled-components";
import Todo from "./Todo";

import { useSelector } from "react-redux";

const List = () => {

  const todos = useSelector(state => state.reducer.todos);
  console.log(todos)

  const workingFilter = todos.filter((todo) => { return todo.isDone === false }).map((todo, i) => {
    return( 
      <Todo 
        key={todo.id} 
        todo={todo} 
        className="working"
      />
    )
  })

  const doneFilter = todos.filter((todo) => { return todo.isDone === true }).map((todo, i) => {
    return( 
      <Todo
        key={todo.id} 
        todo={todo} 
        className="done"
      />)
  })

  return(
    <div>

      <WorkingList>
        <StatusTitle>Working Tasks: { workingFilter.length } </StatusTitle> 
        <STList>
          { workingFilter }
        </STList>
      </WorkingList>
      <DoneList>
        <StatusTitle>Completed Tasks: { doneFilter.length }</StatusTitle>
        <STList>
          { doneFilter }
        </STList>
      </DoneList>

    </div>
  )
};

export default List;

const WorkingList = styled.div`
  float: left;
  margin-left: 1em;
`
const DoneList = styled.div`
  float: right;
  margin-right: 4em;
`

const STList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const StatusTitle = styled.h2`
  color: tomato;
  padding-left: 50px;
`
