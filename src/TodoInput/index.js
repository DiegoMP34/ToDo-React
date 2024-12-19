import './TodoInput.css'

function TodoInput({id, placeholder, value, onChange}) {
    return (
            <textarea 
                id={`${id}`}
                className="input input--add" 
                placeholder={placeholder}
                value={value}
                onChange={onChange} 
            ></textarea>
    );
}

export {TodoInput};