import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import * as S from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <S.CollectionPreviewContainer>
    <S.Title>{title.toUpperCase()}</S.Title>
    <S.PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </S.PreviewContainer>
  </S.CollectionPreviewContainer>
);

export default CollectionPreview;
