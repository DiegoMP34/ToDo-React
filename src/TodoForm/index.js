import { TodoButton } from '../TodoButton';
import { TodoInput } from '../TodoInput';
import './TodoForm.css';
import anotaciones from '../imgs/card-img.jpg';

function TodoForm() {
    return (
        <form className='form'>
            <h2 className='form__title'>
                Hola! <span className='form__name'>Diego</span>
            </h2>
            <label for='task' className='form__question'>Qué vas hacer hoy?</label>
            <TodoInput id='task' placeholder='Ve a por ello'/>
            <div className='card'>
                <img className='card__img' alt='anotaciones' src={anotaciones}></img>
                <TodoButton>Añadir</TodoButton>
            </div>
        </form>
    );
}

export { TodoForm }; 