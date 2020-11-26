import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import * as S from "./sign-in-and-sign-up.styles";

const SignInAndSignUp = () => (
  <S.SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </S.SignInAndSignUpContainer>
);

export default SignInAndSignUp;
