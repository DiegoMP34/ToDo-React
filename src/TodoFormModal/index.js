import { TodoButton } from '../TodoButton';
import { TodoInput } from '../TodoInput';
import './TodoFormModal.css';

function TodoFormModal() {
    return (
        <form className='form formModal'>
            <label for='taskModal' className='input__question'>Qué vas hacer hoy?</label>
            <TodoInput id='taskModal' placeholder='Ve a por ello'/>
            <div className='formModal-container'>
                <TodoButton>Cancelar</TodoButton>
                <TodoButton>Añadir</TodoButton>
            </div>
        </form>
    );
}

export { TodoFormModal }; 