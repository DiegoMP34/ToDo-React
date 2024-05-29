import React from 'react';
import './App.css';
import { TodoCounter } from './Components/TodoCounter.js';
import { TodoSearch } from './Components/TodoSearch.js';
import { TodoList } from './Components/TodoList.js';
import { TodoItem } from './Components/TodoItem.js';
import { TodoButton } from './Components/TodoButton.js';
import { TodoInput } from './Components/TodoInput.js';
import anotaciones from './imgs/card-img.jpg';

const ToDos = [
  { text: 'Asistir al curso de react', isComplete: true},
  { text: 'Cocinar el almuerzo', isComplete: true},
  { text: 'Ordenar los proyectos en github', isComplete: false},
  { text: 'Revisando el código de search: á é í', isComplete: false},
]

function App() {
  const [todos, setTodos] = React.useState(ToDos)
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => todo.isComplete).length;

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  })

  console.log('Verificando los todos ' + todos);

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
          <TodoCounter taskCompleted={completedTodos} total={todos.length}/>
        </div>
        <TodoList>
          {
            searchedTodos.map(
              toDo => (<TodoItem 
                key={toDo.text} 
                text={toDo.text} 
                isComplete={toDo.isComplete} 
                todos={todos}
                setTodos={setTodos}
              />
            ))
          }
        </TodoList>
      </main>
    </>
  );
}

export default App;
