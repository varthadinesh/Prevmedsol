// DataContext.js
import React, { createContext, useContext, useState ,useEffect} from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    return storedUser || { firstname: '',lastname:'', email:'' };
  });

  const setUserData = (userData) => {
    setUser(userData);
  };
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);


  const addToData = (newItem) => {
    setData([...data, newItem]);
  };

  const addToCart = (item) => {
    if(cartItems.length>0 && item.planName === cartItems[0].planName){
      alert("plan already exists")
    }
    else{
      alert("Plan added to cart")

        setCartItems([
          { ...item},
        ]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };


  return (
    <DataContext.Provider value={{ data, addToData, cartItems, addToCart, removeFromCart, user, setUserData}}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
