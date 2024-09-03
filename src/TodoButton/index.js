import './TodoButton.css'

function TodoButton({children}) {
  return (
    <button 
      className="button"
      onClick={(e)=>{
        console.log('Boton click submit');
      }}
    >
      {children}
    </button>
  );
}

export {TodoButton}