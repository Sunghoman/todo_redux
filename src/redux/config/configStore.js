import { createStore } from "redux";
import { combineReducers } from "redux";
import reducer from "../modules/todos";

const rootReducer = combineReducers({
  reducer
});
const store = createStore(rootReducer);

export default store;