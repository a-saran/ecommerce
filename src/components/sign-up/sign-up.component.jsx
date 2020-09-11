import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { createUserProfile, auth } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentials;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfile(user, { displayName });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target: { name, value } }) =>
    setUserCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));

  const { displayName, email, password, confirmPassword } = userCredentials;

  return (
    <div className="authentication-wrapper">
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign Up with your email and password</span>
        <form className="dign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
