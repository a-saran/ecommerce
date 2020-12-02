import React, { memo } from "react";
import "./styles.scss";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt={name} />
    <div className="item-details">
      <div className="name">{name}</div>
      <div className="price">
        {quantity} x {price}
      </div>
    </div>
  </div>
);

export default memo(CartItem);
