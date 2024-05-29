import CheckIcon from './Icons/Check.js';
import UncheckIcon from './Icons/Uncheck.js';
import DeleteIcon from './Icons/Delete.js';
import './TodoItem.css'

function TodoItem({text, isComplete, todos, setTodos}) {
  const todoIndex = todos.findIndex(todo => todo.text === text);

    return(
      <li className="item">
        <UncheckIcon 
          className={`item__uncheck ${isComplete && "item__uncheck--desactive"}`}
          onClick={()=>{
            setTodos(todos.map((todo,index) => {
              if (index === todoIndex) todo.isComplete = true;
              return todo;             
            }))
          }}
        />
        <CheckIcon 
          className={`item__check ${isComplete && "item__check--active"}`}
          onClick={()=>{
            setTodos(todos.map((todo,index) => {
              if (index === todoIndex) todo.isComplete = false;
              return todo;
            }))
          }}
        />
        <p className={`item__text ${isComplete && "item__text--complete"}`}>{text}</p>
        <DeleteIcon onClick={()=>{
            setTodos(todos.toSpliced(todoIndex,1));
          }}
        />
      </li>
    );
}

export {TodoItem}