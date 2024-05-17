import './App.css';
import { TodoCounter } from './Components/TodoCounter.js';
import { TodoSearch } from './Components/TodoSearch.js';
import { TodoList } from './Components/TodoList.js';
import { TodoItem } from './Components/TodoItem.js';
import { TodoButton } from './Components/TodoButton.js';

function App() {
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      <TodoButton/>
    </div>
  );
}

export default App;
