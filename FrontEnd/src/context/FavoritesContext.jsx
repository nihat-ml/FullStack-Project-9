import React, { createContext, useState, useContext } from 'react';


export const FavoritesContext = createContext();


export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (product) => {
    if (!favorites.some(fav => fav._id === product._id)) {
      setFavorites((prevFavorites) => [...prevFavorites, product]);
    } else {
      alert("This guest is already in your favorites.");
    }
  };

 
  const removeFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((product) => product._id !== productId)
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};


