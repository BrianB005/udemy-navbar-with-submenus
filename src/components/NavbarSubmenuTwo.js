import React from "react";
import styled from "styled-components";
const NavbarSubmenuTwo = ({ text, linkText }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Button>{linkText}</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 260px;
  box-shadow: 2px 3px 8px gray;
  position: absolute;
  top: 80px;
  right: -6px;
  line-height: 1.4;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 16px;
  font-weight: 800;
  padding: 30px 10px;
  z-index: 90;
  background: white;
`;
const Text = styled.h4`
  color: black;
  margin-bottom: 5px;
`;
const Button = styled.a`
  color: blue;
  font-size: 14px;
  cursor: pointer;
`;

export default NavbarSubmenuTwo;
