import { useContext } from 'react';
import { TodoIcon } from './index';
import { TodoContext } from '../TodoContext';

function CreateTodoIcon() {
    const {
        setOpenModal,
    } = useContext(TodoContext);

    return(
        <TodoIcon 
            type='add'
            onClick={
                ()=>{setOpenModal(isVisible => !isVisible)}
            }
        />
    );
}

export {CreateTodoIcon}