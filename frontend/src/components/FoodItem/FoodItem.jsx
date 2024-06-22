import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";
import React, { useContext } from "react";
import Rating from "./Rating";

const FoodItem = ({ id, name, price, desc, image, rating }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
    
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img
          className="food-item-image"
          src="https://drive.google.com/file/d/11qaW3WPNMhec2polanvp6yq0I0Xsk1xr"
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <Rating rating={rating} />
        </div>
        <p className="food-item-desc">{desc}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
