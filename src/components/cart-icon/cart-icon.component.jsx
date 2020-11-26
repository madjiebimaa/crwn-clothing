import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import * as S from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <S.CartIconContainer onClick={toggleCartHidden}>
    <S.ShoppingIconContainer />
    <S.ItemCountContainer>{itemCount}</S.ItemCountContainer>
  </S.CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
