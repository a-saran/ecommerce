import React, { useState } from "react";
import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";
import CartDropdown from "../cart-dropdown";

import "./styles.scss";

const CartIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cart-icon">
      <ShoppingIcon
        className="shopping-icon"
        onClick={() => setIsOpen(!isOpen)}
      />
      <span className="item-count">0</span>
      <CartDropdown isOpen={isOpen} />
    </div>
  );
};

export default CartIcon;
