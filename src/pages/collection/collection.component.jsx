import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

import * as S from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { items, title } = collection;

  return (
    <S.CollectionPageContainer>
      <S.Title>{title}</S.Title>
      <S.ItemContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </S.ItemContainer>
    </S.CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
