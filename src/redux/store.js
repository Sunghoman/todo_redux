import { configureStore, createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
  name: "todo",
  initialState: {
  todos: 
  [
    {
      id : 1, 
      title : "내가 만든 쿠키",
      body : "너를 위해 구웠지",
      isDone : false,
    },
    {
      id : 2, 
      title : "식사는 없어 배고파도",
      body : "음료는 없어 배고파도",
      isDone : true,
    },
  ]}
})


export default configureStore({
  reducer: {
    todo: todo.reducer
  }
});