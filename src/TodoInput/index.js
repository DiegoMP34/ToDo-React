import './TodoInput.css'

function TodoInput({placeholder}) {
    return (
        <input type='text' className="input input--add" placeholder={placeholder}></input>
    );
}

export {TodoInput};