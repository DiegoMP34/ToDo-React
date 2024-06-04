import './TodoButton.css'

function TodoButton() {
    return (
        <button 
          className="card__button"
          onClick={(e)=>{
            console.log('Les diste click a añadir')
            console.log(e.target)
          }}
        >Añadir</button>
    );
}

export {TodoButton}