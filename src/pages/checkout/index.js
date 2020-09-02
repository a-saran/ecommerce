import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux/cart/selector";

import "./styles.scss";
import CheckoutItem from "../../components/checkout-item";
import StripeButton from "../../components/stripe-button/stripe-button.componenet";

const Checkout = ({ cartItems, totalValue }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem item={item} key={item.id} />
      ))}

      <div className="total">
        <span>Total: ${totalValue}</span>
      </div>

      <div className="test-warning">
        *Please use the test credit card for payment
        <br />
        4242 4242 4242 42 - upcoming date - any cvv number
      </div>

      <StripeButton price={totalValue} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalValue: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
