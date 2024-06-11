import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
  const {completedTodos, totalTodos} = useContext(TodoContext);

  return (
    <div className='title'>
    <h1 className='title__h1'>Tareas</h1>
    { ((completedTodos === totalTodos) && totalTodos !== 0)
      ? <span className='title__descripcion'>Completaste todo 😀</span>
      : <span className='title__descripcion'>{completedTodos} de {totalTodos} completas</span>
    }
    </div>
  );
}

export {TodoCounter}