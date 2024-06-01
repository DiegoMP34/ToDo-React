import {useState} from 'react';
import './App.css';
import { TodoCounter } from './Components/TodoCounter.js';
import { TodoSearch } from './Components/TodoSearch.js';
import { TodoList } from './Components/TodoList.js';
import { TodoItem } from './Components/TodoItem.js';
import { TodoButton } from './Components/TodoButton.js';
import { TodoInput } from './Components/TodoInput.js';
import anotaciones from './imgs/card-img.jpg';

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = JSON.parse(localStorage.getItem(itemName)) || initialValue;

  const [item, setItem] = useState(localStorageItem);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item, saveItem]
}

function App() {
  const [todos, setTodos] = useLocalStorage('TODOS_V1', []);
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
    <>
      <aside className='create'>
        <h2 className='create__title'>Hola! <span className='create__name'>Nombre</span></h2>
        <p className='create__question'>Qué vas hacer hoy?</p>
        <TodoInput placeholder='Ve a por ello'/>
        <div className='card'>
          <img className='card__img' alt='anotaciones' src={anotaciones}></img>
          <TodoButton/>
        </div>
      </aside>
      <main className='main'>
        <div className='main__header'>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
          <TodoCounter tasksCompleted={completedTodos} total={todos.length}/>
        </div>
        <TodoList>
          {
            searchedTodos.map(
              todo => (<TodoItem 
                key={todo.text} 
                text={todo.text} 
                isComplete={todo.isComplete} 
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}                          
              />
            ))
          }
        </TodoList>
      </main>
    </>
  );
}

export default App;