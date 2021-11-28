import React from "react";
import styled from "styled-components";
const NavbarSubmenuThree = () => {
  return (
    <Wrapper>
      <Title>
        <Left>Notifications</Left>
        <Right>Settings</Right>
      </Title>
      <Text>No notifications</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 310px;
  box-shadow: 2px 3px 8px gray;
  position: absolute;
  top: 80px;

  right: -6px;
  line-height: 1.4;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 18px;
  font-weight: 800;
  padding: 8px 9px;
  z-index: 90;
  color: #082032;
  background: white;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-bottom: 17px;
`;
const Left = styled.a``;

const Right = styled.a`
  color: blue;
  font-size: 15px;
`;
const Text = styled.h4`
  font-family: "Times New Roman", Times, serif;
  font-size: 14px;
  font-weight: 500;
  color: gray;
`;

export default NavbarSubmenuThree;
