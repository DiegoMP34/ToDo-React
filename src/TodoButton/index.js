import './TodoButton.css'

function TodoButton({children}) {
  return (
    <button 
      className='button'
      type='submit'
    >
      {children}
    </button>
  );
}

export {TodoButton}