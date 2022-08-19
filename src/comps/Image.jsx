import React, { useContext, useState } from "react";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  const { toggleFavorite, addToCart, cartItems, removeFromCart } =
    useContext(Context);
  const [hovered, ref] = useHover();

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    // console.log(alreadyInCart);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={img.url} className="image-grid" />;{heartIcon()}
      {cartIcon()}
    </div>
  );
}

export default Image;
