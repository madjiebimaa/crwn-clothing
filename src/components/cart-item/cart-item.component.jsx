import React from "react";

import * as S from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <S.CartItemContainer>
    <S.Image src={imageUrl} alt="item" />
    <S.ItemDetails>
      <S.Name>{name}</S.Name>
      <S.Price>
        {quantity} x ${price}
      </S.Price>
    </S.ItemDetails>
  </S.CartItemContainer>
);

export default CartItem;
