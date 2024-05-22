import './TodoCounter.css';

function TodoCounter({taskCompleted, total}){
    return (
      <div className='title'>
       <h1 className='title__h1'>Tareas</h1>
       <span className='title__descripcion'>{taskCompleted} de {total} completas</span>
      </div>
    );
}

export {TodoCounter}