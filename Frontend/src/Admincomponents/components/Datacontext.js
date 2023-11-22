// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({ firstname: '' });

  const setUserData = (userData) => {
    setUser(userData);
  };

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
