import React from "react";

import * as S from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <S.GroupContainer>
    <S.FormInput onChange={handleChange} {...otherProps} />
    {label ? <S.Label {...otherProps}>{label}</S.Label> : null}
  </S.GroupContainer>
);

export default FormInput;
