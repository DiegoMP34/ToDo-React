import React from 'react';
import { TodoCounter } from './Components/TodoCounter.js';
import { TodoSearch } from './Components/TodoSearch.js';
import { TodoList } from './Components/TodoList.js';
import { TodoItem } from './Components/TodoItem.js';
import { TodoButton } from './Components/TodoButton.js';

function App() {
  const ToDos = [
    { text: 'Asistir al curso de react', isCompleted: true},
    { text: 'Cocinar el almuerzo', isCompleted: false},
    { text: 'Ordenar los proyectosde en github', isCompleted: false},
  ]

  return (
    <>
      <TodoCounter taskCompleted={2} total={5}/>
      <TodoSearch/>
      <TodoList>
        {
          ToDos.map(toDo => (<TodoItem key={toDo.text} text={toDo.text} isCompleted={toDo.isCompleted}/>))
        }
      </TodoList>

      <TodoButton/>
    </>
  );
}

export default App;
