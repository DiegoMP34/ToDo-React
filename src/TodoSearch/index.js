import { useContext } from 'react'
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch(){
  const {searchValue, setSearchValue} = useContext(TodoContext)

  return (
      <input 
        type='search'
        className="input input--search"
        placeholder="Lavar los servicios..."
        value={searchValue}
        onChange={(e)=>{
          setSearchValue(e.target.value)
        }}
      />
  );
}

export { TodoSearch }