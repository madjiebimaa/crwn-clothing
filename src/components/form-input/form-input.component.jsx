import React from "react";

import "./form-input.styles.scss";

import * as S from "./from-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <S.GroupContainer>
    <S.FormInput onChange={handleChange} {...otherProps} />
    {label ? <S.Label {...otherProps}>{label}</S.Label> : null}
  </S.GroupContainer>
);

export default FormInput;
