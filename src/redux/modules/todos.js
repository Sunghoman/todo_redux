const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";

// Action Creator를 생성할 때 매개변수에서 받고,
// 반환하는 액션객체에 payload라는 key: value 값으로 구현한다

// Action Creator
export const addTodo = (payload) => {
  // const nextId = useRef(2)
  return { 
    type: ADD_TODO, payload 
  };
};

// Action Creator
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
})


// 초기 상태값 (state)
const initialState = {
  todos: [],
}

// 리듀서 (변화를 일으키는 함수) (setState)
const reducer = ( state = initialState, action ) => {

  switch (action.type) {

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    
    case TOGGLE_TODO:
      const toggleState = { 
        ...state, 
        todos: state.todos.map((todo) => 
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
        ) 
      }
      return toggleState;

    case DELETE_TODO:
      const deleteTodo = { 
        ...state, 
        todos: state.todos.filter((todo) => 
          todo.id !== action.id
        ) 
      }
      return deleteTodo

    default:
      return state;
  }

};

export default reducer

// switch문 이렇게 적어도 잘 돌아감 (진짜임)
// const reducer = ( state = initialState, action ) => {
//   if (action.type === ADD_TODO) {
//     return {
//       ...state,
//       todos: [...state.todos, action.payload],
//     };
//   } else if (action.type === TOGGLE_TODO) {
//     const toggleState = { ...state, todos: state.todos.map((todo) => todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo) }
//     return toggleState;
//   } else if (action.type === DELETE_TODO) {
//     const deleteTodo = { ...state, todos: state.todos.filter((todo) => todo.id !== action.id) }
//     return deleteTodo
//   } else {
//     return state;
//   }
// }