import { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext'
import { TodoButton } from '../TodoButton';
import { TodoInput } from '../TodoInput';
import './TodoFormModal.css';

function TodoFormModal() {
    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (newTodoValue.trim() !== "") {
            addTodo(newTodoValue)
            setOpenModal(false)
            setNewTodoValue("")
        }
    }

    const onCancel = (e) => {
        setOpenModal(false)
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }

    return (
        <form className='form formModal' onSubmit={onSubmit}>
            <label htmlFor='taskModal' className='input__question'>Qué vas hacer hoy?</label>
            <TodoInput id='taskModal' placeholder='Ve a por ello' value={newTodoValue} onChange={onChange}/>
            <div className='formModal-containerButton'>
                <button type='button' className='button cancel' onClick={onCancel}>Cancelar</button>
                <TodoButton>Añadir</TodoButton>
            </div>
        </form>
    );
}

export { TodoFormModal }; 