import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HrYJ1LauVQyJBdWJjfflC0fDo4iXohVvkltXeKzMVrGdzYz8lZSzPpqXllf89ro05y3UEVkGtc2G94dGQxqVCvI00o6s3Xg0N";

  const onToken = (token) => {
    console.log(token);
    alert("Successful Payment");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
