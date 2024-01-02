import React from "react";
import Logo from "../../ui/logo/logo";
import { StyledSection, Copyright } from "./styles";

function Footer() {
  return (
    <StyledSection>
      <Logo />
      <Copyright>Создано 2021</Copyright>
    </StyledSection>
  );
}

export default Footer;
