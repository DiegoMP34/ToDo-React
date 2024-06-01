import React from 'react';
import './App.css';
import { TodoCounter } from './Components/TodoCounter.js';
import { TodoSearch } from './Components/TodoSearch.js';
import { TodoList } from './Components/TodoList.js';
import { TodoItem } from './Components/TodoItem.js';
import { TodoButton } from './Components/TodoButton.js';
import { TodoInput } from './Components/TodoInput.js';
import anotaciones from './imgs/card-img.jpg';

/* const defaultTodos = [
  { text: 'Asistir al curso de react', isComplete: true},
  { text: 'Cocinar el almuerzo', isComplete: true},
  { text: 'Ordenar los proyectos en github', isComplete: false},
  { text: 'Revisando el código de search: á é í', isComplete: false},
] 
localStorage.setItem('TODOS_V1', defaultTodos);
localStorage.removeItem('TODOS_V1');
*/

function updateStorage(newTodos){
  localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
}

function getStorage() {
  return JSON.parse(localStorage.getItem('TODOS_V1')) || [];
}

function App() {
  // Estados globales
  const [todos, setTodos] = React.useState(getStorage());
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => todo.isComplete === true).length;
  
  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  })
  
  //persistencia
  function saveSesionTodos(newTodos){
    updateStorage(newTodos);
    setTodos(newTodos);
  }

  function completeTodo(text){
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].isComplete = !newTodos[todoIndex].isComplete;
    saveSesionTodos(newTodos);
  }
  
  function deleteTodo(text){
    const todoIndex = todos.findIndex(todo => todo.text === text);
    saveSesionTodos(todos.toSpliced(todoIndex,1));
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
