import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils.js";

import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors.js";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import * as S from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <S.HeaderContainer>
    <S.LogoContainer to="/">
      <Logo />
    </S.LogoContainer>
    <S.OptionsContainer>
      <S.OptionLink to="/shop">shop</S.OptionLink>
      <S.OptionLink to="/shop">contact</S.OptionLink>
      {currentUser ? (
        <S.OptionLink as="div" onClick={() => auth.signOut()}>
          sign out
        </S.OptionLink>
      ) : (
        <S.OptionLink to="/signin">sign in</S.OptionLink>
      )}
      <CartIcon />
    </S.OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </S.HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
