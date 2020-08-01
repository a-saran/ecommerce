import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart/cart-icon";

import "./header.styles.scss";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>

        {currentUser ? (
          <Fragment>
            <div className="option" onClick={() => auth.signOut()}>
              Sign Out
            </div>
            <CartIcon />
          </Fragment>
        ) : (
          <Fragment>
            <Link className="option" to="/signin">
              SignIn
            </Link>
            <Link className="option" to="/signup">
              SignUp
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});

export default connect(mapStateToProps)(Header);
