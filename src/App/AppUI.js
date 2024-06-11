import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoButton } from '../TodoButton';
import { TodoInput } from '../TodoInput';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { EmptyTodo } from '../EmptyTodo';
import anotaciones from '../imgs/card-img.jpg';
import './App.css';

function AppUI() {
  const {
    loading,
    error,
    totalTodos,
    searchedTodos,
    completeTodo,
    deleteTodo
  } = useContext(TodoContext);

  return(
      <>
      <aside className='create'>
        <h2 className='create__title'>Hola! <span className='create__name'>Diego</span></h2>
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
          <TodoCounter/>
        </div>
        <TodoList>
          {loading && (
            <>
              <TodoLoading/>
              <TodoLoading/>
              <TodoLoading/>
              <TodoLoading/>
            </>
          )}
          {error && <TodoError/>}
          {(!loading && !error && totalTodos === 0) && <EmptyTodo/>}

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

export {AppUI}