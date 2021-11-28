import React from "react";
import styled from "styled-components";
import Button from "./Button";
const NavbarSubmenu = ({ title, buttonContent }) => {
  return (
    <Wrapper>
      <Text>{title}</Text>
      <Button text={buttonContent}></Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 260px;
  box-shadow: 2px 3px 8px gray;
  position: absolute;
  top: 75px;
  right: -6px;
  line-height: 1.4;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 18px;
  font-weight: 800;
  padding: 6px;
  z-index: 90;
  background: white;
  margin-top: -6px;
`;
const Text = styled.h4`
  color: black;
`;

export default NavbarSubmenu;
