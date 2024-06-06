import "./TodoLoading.css";

function TodoLoading() {
    return(
        <div className="skeleton__container">
            <div className="skeleton skeleton__container--icon"></div>
            <p className="skeleton skeleton__container--text"></p>
            <div className="skeleton skeleton__container--icon"></div>
        </div>
    );
}

export { TodoLoading}