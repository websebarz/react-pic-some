import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Context = React.createContext();

function ContextProvider(props) {
  const [photoAlbum, setPhotoAlbum] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [hovered, setHovered] = useState(false);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhotoAlbum(data));
  }, []);

  function toggleFavorite(id) {
    const updatedArr = photoAlbum.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    return setPhotoAlbum(updatedArr);
  }

  function addToCart(newItem) {
    setCartItems((prevCart) => [...prevCart, newItem]);
  }

  function emptyCart() {
    setCartItems([]);
  }

  console.log(cartItems);

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <Context.Provider
      value={{
        photoAlbum,
        toggleFavorite,
        addToCart,
        cartItems,
        removeFromCart,
        emptyCart,
        hovered,
        setHovered,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

Image.PropTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export { ContextProvider, Context };
