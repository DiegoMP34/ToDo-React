import './TodoCounter.css';

function TodoCounter({tasksCompleted, total}){
  return (
    <div className='title'>
    <h1 className='title__h1'>Tareas</h1>
    { ((tasksCompleted === total) && total !== 0)
      ? <span className='title__descripcion'>Completaste todo 😀</span>
      : <span className='title__descripcion'>{tasksCompleted} de {total} completas</span>
    }
    </div>
  );
}

export {TodoCounter}