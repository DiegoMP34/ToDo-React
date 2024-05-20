import './TodoCounter.css';

function TodoCounter({taskCompleted, total}){
    return (
      <h1>Completaste {taskCompleted} de {total} ToDos</h1>
    );
}

export {TodoCounter}