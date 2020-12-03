import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import * as S from "./collection-preview.styles";

const CollectionPreview = ({ title, items, match, history, routeName }) => {
  return (
    <S.CollectionPreviewContainer>
      <S.Title onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </S.Title>
      <S.PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </S.PreviewContainer>
    </S.CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
