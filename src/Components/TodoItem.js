import CheckIcon from './Icons/Check.js';
import UncheckIcon from './Icons/Uncheck.js';
import DeleteIcon from './Icons/Delete.js';
import './TodoItem.css'

function TodoItem({text, isComplete, onComplete, onDelete}) {
    return(
      <li className="item">
        <UncheckIcon 
          className={`item__uncheck ${isComplete && "item__uncheck--desactive"}`}
          onClick={onComplete}
        />
        <CheckIcon 
          className={`item__check ${isComplete && "item__check--active"}`}
          onClick={onComplete}                  
        />
        <p className={`item__text ${isComplete && "item__text--complete"}`}>{text}</p>
        <DeleteIcon onClick={onDelete}/>
      </li>
    );
}

export {TodoItem}