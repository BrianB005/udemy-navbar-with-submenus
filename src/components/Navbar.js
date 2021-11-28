import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import NavbarSubmenu from "./NavbarSubmenu";
import NavbarSubmenuTwo from "./NavbarSubmenuTwo";
import { IoIosNotificationsOutline } from "react-icons/io";
import MyLearning from "./MyLearning";
import NavbarSubmenuThree from "./NavbarSubmenuThree";
import Account from "./Account";
import { links } from "../data";
import CategorySubmenus from "./NavbarCategories/CategorySubmenus";
import ListWrapper from "./NavbarCategories/ListWrapper";
import Topics from "./NavbarCategories/Topics";
import { useDispatch, useSelector } from "react-redux";
import { closeSubmenu, closeSubSubmenu } from "../redux/actions";
const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const linksToShow = useSelector((state) => state.submenu);
  const topics = useSelector((state) => state.subsubmenu);
  const dispatch = useDispatch();
  const handleMouseLeave = () => {
    dispatch(closeSubmenu());
    dispatch(closeSubSubmenu())
  };
  return (
    <NavWrapper>
      <Wrapper>
        <Left>
          <Logo
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="logo"
          ></Logo>
          <Categories onMouseLeave={handleMouseLeave}>
            <h4>Categories</h4>
            <Submenu2>
              <ListWrapper links={links} />
            </Submenu2>
            {linksToShow.submenuOpen && <CategorySubmenus />}
            {topics.subsubmenuOpen && <Topics />}
          </Categories>
        </Left>
        <Center>
          <SearchContainer>
            <SearchIcon disabled={inputValue.length === 0 ? true : false}>
              <FaSearch />
            </SearchIcon>
            <Input
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search for anything"
              autoFocus
            />
          </SearchContainer>
        </Center>
        <Right>
          <List>
            <ListItem>
              <p>Udemy Business</p>
              <Submenu>
                <NavbarSubmenu
                  title="Get your team access to over 6,000 top Udemy courses, anytime, anywhere."
                  buttonContent="Try Udemy Business"
                />
              </Submenu>
            </ListItem>
            <ListItem>
              <p>Teach on Udemy</p>
              <Submenu>
                <NavbarSubmenu
                  title="Turn what you know into an opportunity and reach millions around the world."
                  buttonContent="Learn More"
                />
              </Submenu>
            </ListItem>

            <ListItem>
              <p>My Learning</p>
              <Submenu>
                <MyLearning />
              </Submenu>
            </ListItem>
            <ListItem>
              <Icon>
                <AiOutlineHeart />
              </Icon>
              <Submenu>
                <NavbarSubmenuTwo
                  text="You wishlist is currently empty"
                  linkText="Explore Courses"
                />
              </Submenu>
            </ListItem>
            <ListItem>
              <Icon>
                <AiOutlineShoppingCart />
              </Icon>
              <Submenu>
                <NavbarSubmenuTwo
                  text="Your cart is currently Empty"
                  linkText="Keep Shopping"
                />
              </Submenu>
            </ListItem>
            <ListItem>
              <Icon>
                <IoIosNotificationsOutline />
              </Icon>
              <Submenu>
                <NavbarSubmenuThree />
              </Submenu>
            </ListItem>
            <ListItem>
              <h1>BK</h1>
              <span></span>
              <Submenu>
                <Account />
              </Submenu>
            </ListItem>
          </List>
        </Right>
      </Wrapper>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  width: 100vw;
  border-bottom: 1px solid gray;
  height: 72px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 97vw;
  margin: 0 auto;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Submenu2 = styled.div`
  display: none;
`;
const Categories = styled.div`
  position: relative;
  padding-top: 26px;
  padding-bottom: 26px;
  h4 {
    padding: 0 12px;
    cursor: pointer;
    transition: all 0.5s linear;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
  }

  &:hover,
  &:focus {
    ${Submenu2} {
      display: block;
    }
    h4 {
      color: rgb(59, 97, 228);
    }
  }
`;
const Logo = styled.img`
  width: 91px;
  height: 33px;
  cursor: pointer;
  margin-right: 5px;
  &:hover {
    opacity: 0.8;
  }
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: 98%;
  margin: 0 auto;
  position: relative;
`;
const SearchIcon = styled.div`
  position: absolute;
  cursor: pointer;
  left: 17px;
  top: 50%;
  transform: translateY(-50%);
  &:disabled {
    cursor: not-allowed;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  border-radius: 30px;
  border: 1px solid black;
  padding-left: 44px;
  &:focus {
    outline: none;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
`;
const Submenu = styled.div`
  display: none;
  /* z-index: -100; */
  transition: all 0.8s linear;
`;
const ListItem = styled.li`
  margin-right: 25px;
  font-size: 14px;
  transition: all 0.6s linear;
  padding-top: 24px;
  padding-bottom: 24px;
  cursor: pointer;

  position: relative;
  &:hover {
    ${Submenu} {
      display: block;
    }
  }

  &:hover {
    color: rgb(59, 97, 228);
  }
  &:first-child {
    margin-left: 15px;
  }
  &:last-child {
    color: white;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    padding: 0;
    background: rgb(23, 39, 75);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    h1 {
      font-size: 16px;
    }
    span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgb(203, 34, 234);
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

const Icon = styled.h6`
  font-size: 23px;
  margin-top: 6px;
  position: relative;
`;

export default Navbar;
