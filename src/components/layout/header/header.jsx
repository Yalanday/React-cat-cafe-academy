import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../../layout/nav/nav";
import { StyledSection } from "./styles";

function Header({ pageUrl }) {
  return (
    <StyledSection as="header">
      <Logo />
      <Nav />
    </StyledSection>
  );
}

export default Header;
