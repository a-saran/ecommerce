import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../../custom-button/custom-button.component";
import CartItem from "../../cart-item/index";
import "./styles.scss";
import { selectCartItems } from "../../../redux/cart/selector";

const CartDropdown = ({ isOpen, cartItems, history, toggleDropDown }) => (
  <div className={`cart-dropdown${isOpen ? " open" : ""}`}>
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem item={item} key={item.id} />)
      ) : (
        <span className="empty-msg">No items in cart</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        toggleDropDown();
        history.push("/checkout");
      }}
      style={{ marginTop: "10px" }}
    >
      Go To Checkout
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
