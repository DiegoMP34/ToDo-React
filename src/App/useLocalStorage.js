import { useState } from "react";

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = JSON.parse(localStorage.getItem(itemName)) || initialValue;
  
    const [item, setItem] = useState(localStorageItem);
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return [item, saveItem]
}

export { useLocalStorage };