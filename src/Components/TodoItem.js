import './TodoItem.css'
import { TodoIcon } from './Icons/TodoIcon.js';

function TodoItem({text, isComplete, onComplete, onDelete}) {
    return(
      <li className="item">
        <TodoIcon 
          type={`${isComplete ? 'check' : 'uncheck'}`}
          onClick={onComplete}
        />
        <p className={`item__text ${isComplete && "item__text--complete"}`}>{text}</p>
        <TodoIcon type='delete' onClick={onDelete}/>
      </li>
    );
}

export {TodoItem}