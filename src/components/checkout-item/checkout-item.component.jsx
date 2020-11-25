import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { name, price, quantity, imageUrl } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="Item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">&lang; {quantity} &rang;</span>
    <span className="price">{price}</span>
    <div className="remove-button">&Chi;</div>
  </div>
);

export default CheckoutItem;
