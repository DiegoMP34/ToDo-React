import { TodoIcon } from "../TodoIcon";
import "./TodoError.css"

function TodoError() {
    return(
        <div className="error">
            <TodoIcon type="error"/>
            <p>Ha ocurrido un error, por favor recarga la pagina</p>
        </div>
    );
}

export { TodoError }