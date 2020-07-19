import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword({
        email,
        password
      });
      this.setState({
        email: "",
        password: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="authentication-wrapper">
        <div className="sign-in">
          <h2>I already have a account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.onSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              handleChange={this.onChange}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              handleChange={this.onChange}
              label="password"
              required
            />

            <div className="buttons">
              <CustomButton type="submit">Submit</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                Sign In Google
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
