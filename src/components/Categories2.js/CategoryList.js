import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { navLinks } from "../../data";
import { closeNavSubmenu, openNavSubmenu } from "../../redux/actions";
import Submenu from "./Submenu";

const CategoryList = () => {
  const dispatch = useDispatch();
  const container = useRef(null);
  const { navSubmenuOpen } = useSelector((state) => state.navSubmenu);
  const handleHover = (e) => {
    if (e.target.classList.contains("link")) {
      const currentItem = e.target.getBoundingClientRect();
      const left = currentItem.left;
      const right = currentItem.right;
      const bottom = currentItem.bottom;
      const center = (left + right) / 2;
      const itemHovered = e.target;
      itemHovered.classList.add("active");

      // console.log(itemHovered.className);

      dispatch(
        openNavSubmenu({
          text: itemHovered.innerText,
          location: { center, bottom },
        })
      );
    } else {
      dispatch(closeNavSubmenu());
    }
  };

  const handleLeave = (e) => {
    e.target.classList.remove("active");
  };

  return (
    <>
      <Wrapper>
        <List>
          {navLinks.map((link) => (
            <ListItem
              key={link.id}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              ref={container}
            >
              <h6 className="link">{link.text}</h6>
            </ListItem>
          ))}
        </List>
        {navSubmenuOpen && <Submenu />}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  height: 60px;
  width: 100vw;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0px 2px 6px gray;
`;
const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: 0 auto;
`;
const ListItem = styled.div`
  color: black;
  justify-content: space-between;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 2;
  cursor: pointer;
  width: 100%;
  flex-wrap: nowrap;
  transition: all 0.4s linear;
  width: fit-content;
  &:hover,
  &.active {
    color: blue;
  }

  h6 {
    font-size: 12px;
    font-weight: 400;
  }
`;

export default CategoryList;
