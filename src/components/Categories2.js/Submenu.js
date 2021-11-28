import React, { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Submenu = () => {
  const { links } = useSelector((state) => state.navSubmenu);
  const currentItemRef = useRef(null);
  // const { center, bottom } = location;
  // const currentItem = currentItemRef.current;
  // // currentItem.style.left = `${center}px`;
  // // currentItem.style.bottom = `${bottom}px`;
  return (
    <Wrapper ref={currentItemRef}>
      <List>
        {links.slice(0, 8).map((link) => (
          <ListItem key={link.id}>
            <h6 className="link">{link.text}</h6>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100vw;
  position: fixed;
  top: 130px;
  background: #082032;
  color: white;

  &::after {
    /* content: ""; */
    display: block;
    z-index: 50;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #082032;
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;
const ListItem = styled.div`
  color: white;
  justify-content: space-between;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 2;
  cursor: pointer;
  width: 100%;
  width: fit-content;
  transition: all 0.4s linear;
  &:hover,
  &.active {
    color: blue;
  }

  h6 {
    font-size: 12px;
    font-weight: 400;
  }
`;

export default Submenu;
