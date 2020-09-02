import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HMm1nJNEZI7Sb9Ee1QaQ3GtZGO03gBZMLOiYpz32lsaYBszxZ424ulxmmSnj4orwjAzlRuy8veObl6HkcYbuDVT00qCHFfeGh";

  const onToken = token => {
    console.log(token);
    alert("payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN clothing"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
