import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  .App {
    max-width: 1440px;
    margin: auto;
    padding: 20px 60px;
    @media screen and (max-width: 768px) {
      padding: 20px;
    }
  }


  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .authentication-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;
