import {useState} from 'react';
import './App.css';
import { useLocalStorage } from './useLocalStorage.js';
import { AppUI } from './AppUI.js';

function App() {
  const {
    item : todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
  
  const completedTodos = todos.filter(todo => todo.isComplete === true).length;
  
  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  })

  function completeTodo(text){
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].isComplete = !newTodos[todoIndex].isComplete;
    setTodos(newTodos);
  }
  
  function deleteTodo(text){
    const todoIndex = todos.findIndex(todo => todo.text === text);
    setTodos(todos.toSpliced(todoIndex,1));
  }

  return (
    <AppUI
      loading={loading}
      error={error}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completedTodos={completedTodos}
      totalTodos={todos.length}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;