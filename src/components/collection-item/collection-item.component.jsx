import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions.js";

import * as S from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <S.CollectionItemContainer>
      <S.BackgroundImage className="image" image imageUrl={imageUrl} />
      <S.CoolectionFooter>
        <S.Name>{name}</S.Name>
        <S.Price>{price}</S.Price>
      </S.CoolectionFooter>
      <S.AddButton onClick={() => addItem(item)} inverted>
        add to cart
      </S.AddButton>
    </S.CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
