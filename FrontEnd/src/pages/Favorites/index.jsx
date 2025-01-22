import React, { useContext } from 'react';
import { FaRegHeart } from 'react-icons/fa'; 

import Swal from 'sweetalert2'; 
import { Helmet } from 'react-helmet';
import { FavoritesContext } from '../../context/FavoritesContext';




function Favorites() {
  let { favorites, setRemoveFavorite } = useContext(FavoritesContext); 

 
  if (favorites.length === 0) {
    return <div>Your favorites list is empty</div>;
  }

  
  const handleRemoveFavorite = (productId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to undo this action!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setRemoveFavorite(productId); 
        Swal.fire('Removed!', 'The guest has been removed from favorites.', 'success');
      }
    });
  };

  return (
    <>
      <Helmet>
            <title>Favorites</title>
      </Helmet>
      <div className="favorite-page-container">
      
      <h1>Your Favorite Guests</h1>
      <div className="favorite-cards-container">
        {favorites.map((product) => (
          <div className="favorite-card" key={product._id}>
            <div className="favorite-image">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                src={product.image}  
                alt={product.name}  
              />
            </div>
            <h3 className="favorite-name">{product.title}</h3>  
             
            <span className="favorite-price">${product.price}</span> 
            <div className="favorite-buttons-container">
              <button className="remove-favorite-btn" onClick={() => handleRemoveFavorite(product._id)}>
                <FaRegHeart style={{ color: "red", marginRight: "8px" }} /> 
                Remove from Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
}

export default Favorites;