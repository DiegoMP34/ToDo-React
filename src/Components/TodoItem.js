import CheckIcon from './Icons/Check.js';
import DeleteIcon from './Icons/Delete.js';
import './TodoItem.css'

function TodoItem({text, isCompleted}) {
    return(
      <li className="item">
        <CheckIcon/>
        <p className='item__text'>{text}</p>
        <DeleteIcon/>
      </li>
    );
}

export {TodoItem}