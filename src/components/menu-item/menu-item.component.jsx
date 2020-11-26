import React from "react";
import { withRouter } from "react-router-dom";

import * as S from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <S.MenuItemContainer size={size}>
    <S.BackgroundImage imageUrl={imageUrl} />
    <S.Content onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <S.Title>{title.toUpperCase()}</S.Title>
      <S.Subtitle>SHOP NOW</S.Subtitle>
    </S.Content>
  </S.MenuItemContainer>
);

export default withRouter(MenuItem);
