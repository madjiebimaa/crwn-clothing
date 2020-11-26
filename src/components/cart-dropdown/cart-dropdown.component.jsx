import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import * as S from "./cart-dropdown.styles";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <S.CartDropDownContainer>
    <S.CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <S.EmptyMessage>Your cart is empty</S.EmptyMessage>
      )}
    </S.CartItemsContainer>
    <S.CheckoutButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      go to checkout
    </S.CheckoutButton>
  </S.CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
