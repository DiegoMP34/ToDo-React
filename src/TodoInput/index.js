import './TodoInput.css'

function TodoInput({id, placeholder}) {
    return (
            <input type='text' id={`${id}`} className="input input--add" placeholder={placeholder}></input>
    );
}

export {TodoInput};