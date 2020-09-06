import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const withSpinner = WrapperComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapperComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default withSpinner;
