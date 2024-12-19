import {useContext, useState} from 'react';
import { TodoContext } from '../TodoContext'
import { TodoButton } from '../TodoButton';
import { TodoInput } from '../TodoInput';
import './TodoForm.css';
import anotaciones from '../imgs/card-img.jpg';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext)
    //contexto local
    const [newTodoValue, setNewTodoValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (newTodoValue.trim() !== "") {
            addTodo(newTodoValue)
            setOpenModal(false)
            setNewTodoValue("")
        }
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <h2 className='form__title'>
                Hola! <span className='form__name'>Diego</span>
            </h2>
            <label htmlFor='task' className='form__question'>Qué vas hacer hoy?</label>
            <TodoInput id='task' placeholder='Ve a por ello' value={newTodoValue} onChange={onChange}/>
            <div className='card'>
                <img className='card__img' alt='anotaciones' src={anotaciones}></img>
                <TodoButton>Añadir</TodoButton>
            </div>
        </form>
    );
}

export { TodoForm }; 