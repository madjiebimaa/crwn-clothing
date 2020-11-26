import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import StripeButtonCheckout from "../../components/stripe-button/stripe-button.component";

import {
  selectCartTotal,
  selectCartItems,
} from "../../redux/cart/cart.selectors.js";

import * as S from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <S.CheckoutPageContainer>
    <S.CheckoutHeader>
      <S.HeaderBlock>
        <span>Product</span>
      </S.HeaderBlock>
      <S.HeaderBlock>
        <span> Description</span>
      </S.HeaderBlock>
      <S.HeaderBlock>
        <span>Quantity</span>
      </S.HeaderBlock>
      <S.HeaderBlock>
        <span>Price</span>
      </S.HeaderBlock>
      <S.HeaderBlock>
        <span>Remove</span>
      </S.HeaderBlock>
    </S.CheckoutHeader>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <S.Total>Total: ${total}</S.Total>
    <S.TestWarning>
      *Please use the following test credit card for payment *
      <br />
      4242 4242 4242 4242 - Exp : 01/23 - CVV : 123
    </S.TestWarning>

    <StripeButtonCheckout price={total} />
  </S.CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
