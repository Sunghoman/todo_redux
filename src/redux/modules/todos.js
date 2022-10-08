const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";

// Action Creator를 생성할 때 매개변수에서 받고,
// 반환하는 액션객체에 payload라는 key: value 값으로 구현한다

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload }; // 리듀서한테 어떤 정보를 같이 보내려면 payload를 이용함
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
  todos: [
    {
      id: 1,
      title: "내가 만든 쿠키",
      body: "너를 위해 구웠지",
      isDone: false
    }
  ]
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
      const toggleState = { ...state, todos: state.todos.map(todo => todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo) }
      return toggleState;

    case DELETE_TODO:
      const deleteTodo = { ...state, todos: state.todos.filter(todo => todo.id !== action.id) }
      return deleteTodo

    default:
      return state;
  }
};

export default reducer