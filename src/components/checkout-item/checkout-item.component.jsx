import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import * as S from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  return (
    <S.CheckoutItemContainer>
      <S.ImageContainer>
        <S.Image src={imageUrl} alt="Item" />
      </S.ImageContainer>
      <S.Name>{name}</S.Name>
      <S.Quantity>
        <S.Arrow onClick={() => removeItem(cartItem)}>&lang;</S.Arrow>
        <S.Value>{quantity} </S.Value>
        <S.Arrow onClick={() => addItem(cartItem)}>&rang;</S.Arrow>
      </S.Quantity>
      <S.Price>{price}</S.Price>
      <S.RemoveButton onClick={() => clearItem(cartItem)}>&Chi;</S.RemoveButton>
    </S.CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
