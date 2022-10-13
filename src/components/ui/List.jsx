import styled from "styled-components";
import Todo from "./Todo";

import { useSelector } from "react-redux";

const List = () => {

  const todos = useSelector(state => state.reducer.todos);
  // console.log(todos)

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

  // 로컬스토리지에 저장티비
  todos.map((todo) => {
    return localStorage.setItem(todo.id, JSON.stringify(todo))
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
  margin-right: 10em;
`

const STList = styled.ul`
  position: absolute;
`

const StatusTitle = styled.h2`
  color: tomato;
  padding-left: 50px;
`
