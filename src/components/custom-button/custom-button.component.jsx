import React from "react";

import * as S from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  <S.CustomButtonContainer {...props}>{children}</S.CustomButtonContainer>
);

export default CustomButton;
