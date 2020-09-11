import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const onChange = ({ target: { value, name } }) => {
    setUserCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = async e => {
    e.preventDefault();

    const { email, password } = userCredentials;

    try {
      await auth.signInWithEmailAndPassword({
        email,
        password
      });
      setUserCredentials({
        email: "",
        password: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  const { email, password } = userCredentials;

  return (
    <div className="authentication-wrapper">
      <div className="sign-in">
        <h2>I already have a account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={onSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={onChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={onChange}
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
};

export default SignIn;
