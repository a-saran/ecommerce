import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "../../redux/user/selector";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart/cart-icon";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

import { signOutStart } from "../../redux/user/actions";

const Header = ({ currentUser, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>

        {currentUser ? (
          <Fragment>
            <OptionLink as="div" onClick={() => signOutStart()}>
              Sign Out
            </OptionLink>
            <CartIcon />
          </Fragment>
        ) : (
          <Fragment>
            <OptionLink to="/signin">SignIn</OptionLink>
            <OptionLink to="/signup">SignUp</OptionLink>
          </Fragment>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
