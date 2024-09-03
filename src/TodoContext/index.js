import { useState, createContext } from "react";
import { useLocalStorage } from '../TodoContext/useLocalStorage.js';

const TodoContext = createContext();

function TodoProvider({children}) {

    const {
        item : todos,
        saveItem: setTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);
    
    const completedTodos = todos.filter(todo => todo.isComplete === true).length;
    
    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
    })

    function completeTodo(text){
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text);
        newTodos[todoIndex].isComplete = !newTodos[todoIndex].isComplete;
        setTodos(newTodos);
    }
    
    function deleteTodo(text){
        const todoIndex = todos.findIndex(todo => todo.text === text);
        setTodos(todos.toSpliced(todoIndex,1));
    }

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos : todos.length,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>    
    );
}

export { TodoContext, TodoProvider};