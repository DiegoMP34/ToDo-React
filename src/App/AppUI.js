import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { EmptyTodo } from '../EmptyTodo';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { CreateTodoIcon } from '../TodoIcon/CreateTodoIcon';
import { TodoFormModal } from '../TodoFormModal';
import './App.css';

function AppUI() {
  const {
    loading,
    error,
    totalTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = useContext(TodoContext);

  return(
    <>
      <TodoForm/>
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
        <CreateTodoIcon/>
      </main>
      {openModal && (
        <Modal>
          <TodoFormModal/>
        </Modal>
      )}
    </>
  );
}

export {AppUI}