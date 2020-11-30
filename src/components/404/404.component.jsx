import React from "react";
import {
  ErrorImage,
  ErrorImageText,
  ErrorImageOverlay
} from "../404/404.styles";
import errorImg from "../../assets/error.png";

const NoPageFound = ({ msg }) => (
  <ErrorImageOverlay>
    <ErrorImage src={errorImg} alt="error" />
    <ErrorImageText>{msg || "Sorry this page is broken"}</ErrorImageText>
  </ErrorImageOverlay>
);

export default NoPageFound;
