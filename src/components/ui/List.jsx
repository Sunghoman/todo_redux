import styled from "styled-components";
import Todo from "./Todo";

const List = () => {
  return(
    <div>
      <StatusTitle>Working Task</StatusTitle>
      <STList>
        {/* { workingFilter } */}
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
      </STList>

      <hr/>
      
      <StatusTitle>Completed Task</StatusTitle>
      <STList>
        {/* { doneFilter } */}
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
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