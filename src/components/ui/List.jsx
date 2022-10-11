import styled from "styled-components";
import Todo from "./Todo";

import { useSelector } from "react-redux";

const List = () => {

  const todos = useSelector(state => state.reducer.todos);
  console.log(todos);


  const workingFilter = todos.filter((todo) => { return todo.isDone === false }).map((todo, i) => {
    return( 
      <Todo 
        key={todo.id} 
        todo={todo} 
      />
    )
  })

  const doneFilter = todos.filter((todo) => { return todo.isDone === true }).map((todo, i) => {
    return( 
      <Todo
        key={todo.id} 
        todo={todo} 
      />)
  })

  return(
    <div>
      <StatusTitle>{ workingFilter.length } 개의 할 일이 남았어요!</StatusTitle> 
      <STList>
        { workingFilter }
      </STList>

      <hr/>

      <StatusTitle>{ doneFilter.length } 개를 완료했어요!</StatusTitle>
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