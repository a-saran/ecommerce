import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

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
    this.state({
      [name]: value
    });
  };

  onSubmit = e => {
    e.PreventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { email, password } = this.state;
    return (
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

          <CustomButton type="submit">Submit</CustomButton>
          <CustomButton onClick={signInWithGoogle}>Sign In Google</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
