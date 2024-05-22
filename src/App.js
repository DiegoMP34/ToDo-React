import React from 'react';
import './App.css';
import { TodoCounter } from './Components/TodoCounter.js';
import { TodoSearch } from './Components/TodoSearch.js';
import { TodoList } from './Components/TodoList.js';
import { TodoItem } from './Components/TodoItem.js';
import { TodoButton } from './Components/TodoButton.js';
import { TodoInput } from './Components/TodoInput.js';
import anotaciones from './imgs/card-img.jpg';

function App() {
  const ToDos = [
    { text: 'Asistir al curso de react', isCompleted: true},
    { text: 'Cocinar el almuerzo', isCompleted: false},
    { text: 'Ordenar los proyectosde en github', isCompleted: false},
  ]

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
          <TodoSearch/>
          <TodoCounter taskCompleted={2} total={5}/>
        </div>
        <TodoList>
          {
            ToDos.map(toDo => (<TodoItem key={toDo.text} text={toDo.text} isCompleted={toDo.isCompleted}/>))
          }
        </TodoList>
      </main>
    </>
  );
}

export default App;
