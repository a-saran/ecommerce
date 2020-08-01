import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";
import CartDropdown from "../cart-dropdown";

import { selectCartItemsCount } from "../../../redux/cart/selector";

import "./styles.scss";

const CartIcon = ({ itemsCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cart-icon">
      <ShoppingIcon
        className="shopping-icon"
        onClick={() => setIsOpen(!isOpen)}
      />
      <span className="item-count">{itemsCount}</span>
      <CartDropdown isOpen={isOpen} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CartIcon);
