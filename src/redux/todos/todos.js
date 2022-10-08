import { createSlice } from "@reduxjs/toolkit";

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
      body : "음료는 없어 목말라도",
      isDone : true,
    },
  ]},
  reducers : {
    toggle(state, action) {
      console.log(state)
      console.log(action)
    },
    remove() {
      console.log("삭제 기능임")
    },
    addPost() {
      console.log("추가 기능임")
    }
  }
});

export const { toggle, remove, addPost } = todo.actions

export default todo;