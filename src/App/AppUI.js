import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoButton } from '../TodoButton';
import { TodoInput } from '../TodoInput';
import anotaciones from '../imgs/card-img.jpg';

function AppUI({
    loading,
    error,
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    searchedTodos,
    completeTodo,
    deleteTodo
}) 
{
    return(
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
            <TodoCounter tasksCompleted={completedTodos} total={totalTodos}/>
          </div>
          <TodoList>
            {loading && <p>Esta cargando...</p>}
            {error && <p>Hubo un error :/</p>}
            {(!loading && totalTodos === 0) && <p>Empieza añadiendo una tarea.</p>}

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