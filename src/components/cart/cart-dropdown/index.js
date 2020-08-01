import React, { Component } from "react";
import CustomButton from "../../custom-button/custom-button.component";
import "./styles.scss";

const CartDropdown = ({ isOpen }) => (
  <div className={`cart-dropdown${isOpen ? " open" : ""}`}>
    <div className="cart-items"></div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

export default CartDropdown;
