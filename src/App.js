import './App.css';
import TodoList from './pages/TodoList';
import TodoItem from './pages/TodoItem';

import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/detail/:id" element={<TodoItem />} />
    </Routes>
  );
}

export default App;
