import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: max-content;
  }
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export { HeaderContainer, LogoContainer, OptionsContainer, OptionLink };
