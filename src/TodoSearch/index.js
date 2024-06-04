import React from 'react'
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}){
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