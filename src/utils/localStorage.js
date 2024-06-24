export const getLocalStorage = (key, initialValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };
  
  export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  