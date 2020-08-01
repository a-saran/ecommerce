import React from "react";
import { connect } from "react-redux";

import CustomButton from "../../custom-button/custom-button.component";
import CartItem from "../../cart-item/index";
import "./styles.scss";
import { selectCartItems } from "../../../redux/cart/selector";

const CartDropdown = ({ isOpen, cartItems }) => (
  <div className={`cart-dropdown${isOpen ? " open" : ""}`}>
    <div className="cart-items">
      {cartItems.map(item => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
