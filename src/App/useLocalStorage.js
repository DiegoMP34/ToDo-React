import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() =>{
    setTimeout(() =>{
      try {
        const localStorageItem = JSON.parse(localStorage.getItem(itemName)) || initialValue;
        setItem(localStorageItem); 
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  },[itemName]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
  
  return {
    item, 
    saveItem,
    loading,
    error,
  }
}

export { useLocalStorage };