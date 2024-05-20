function TodoItem({text, isCompleted}) {
    return(
      <li>
        <span>✅</span>
        <p>{text}</p>
        <span>❌</span>
      </li>
    );
}

export {TodoItem}