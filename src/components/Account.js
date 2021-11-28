import React from "react";
import styled from "styled-components";
import { MdLanguage } from "react-icons/md";
const Account = () => {
  return (
    <Wrapper>
      <AccountWrapper>
        <ProfilePic>BK</ProfilePic>
        <Info>
          <Name>Brian Kipkemei</Name>
          <Email>brianbett316@gmail.com</Email>
        </Info>
      </AccountWrapper>
      <List>
        <ListItem>My learning</ListItem>
        <ListItem>My cart</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Teach on Udemy</ListItem>
      </List>
      <List>
        <ListItem>Notifications</ListItem>
        <ListItem>
          Messages
          <div>9</div>
        </ListItem>
      </List>
      <List>
        <ListItem>Account Settings</ListItem>
        <ListItem>Payment Methods</ListItem>
        <ListItem>Udemy Credits</ListItem>
        <ListItem>Purchase History</ListItem>
      </List>
      <List>
        <ListItem>
          Language
          <h4>
            English <MdLanguage style={{ marginLeft: 5 }} />
          </h4>
        </ListItem>
      </List>

      <List>
        <ListItem>Public profile</ListItem>
        <ListItem>Edit profile</ListItem>
      </List>
      <List>
        <ListItem>Help</ListItem>
        <ListItem>Logout</ListItem>
      </List>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 290px;
  box-shadow: 2px 3px 8px gray;
  position: absolute;
  top: 60px;
  margin-top: -6px;
  right: -2px;
  line-height: 1.4;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 18px;
  font-weight: 800;
  padding: 6px;
  z-index: 90;
  background: white;
  height: 90vh;
  color: #082032;
  font-family: "Times New Roman", Times, serif;
`;
const List = styled.ul`
  border-bottom: 1px solid lightgrey;
  padding: 16px 10px;
`;
const ListItem = styled.li`
  text-align: start;
  transition: all 0.4s linear;
  position: relative;
  letter-spacing: 1px;
  font-weight: 400;
  line-height: 2.07;
  color: rgb(101, 99, 126);
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  div {
    position: relative;
    color: white;
    ::after {
      content: "";
      position: absolute;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: rgb(203, 34, 234);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      z-index: -1;
    }
  }
  h4 {
    display: flex;
    align-items: center;
  }
  &:hover {
    color: blue;
  }
`;

const Name = styled.h3`
  font-size: 17px;
  transition: all 0.4s linear;
`;
const AccountWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid lightgrey;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  &:hover {
    ${Name} {
      color: blue;
    }
  }
`;
const ProfilePic = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: #082032;
`;

const Email = styled.h6``;
const Info = styled.div`
  text-align: start;
  padding-left: 6px;
`;
export default Account;
