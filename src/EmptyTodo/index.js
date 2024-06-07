import { ReactComponent as AddSVG } from './add.svg';
import './EmptyTodo.css'

function EmptyTodo() {
    return(
        <div className='empty'>
            <AddSVG/>
            <p>Añade una tarea</p>
        </div>
    );
}

export { EmptyTodo}