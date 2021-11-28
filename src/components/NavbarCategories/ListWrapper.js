import React from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";

import { openSubmenu } from "../../redux/actions";
const ListWrapper = ({ links }) => {
  const dispatch = useDispatch();

  const handleHover = (e) => {
    const itemHovered = e.target;

    itemHovered.classList.add("active");
    if (itemHovered.classList.contains("link")) {
      dispatch(openSubmenu(itemHovered.firstElementChild.innerText));
    }
  };
  const handleLeave = (e) => {
    e.target.classList.remove("active");
  };

  return (
    <Container>
      <Wrapper>
        {links.map((link) => (
          <ListItem
            key={link.id}
            className="link"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <h6>{link.text}</h6>
            <Icon>{link.icon}</Icon>
          </ListItem>
        ))}
      </Wrapper>
    </Container>
  );
};
const Container = styled.div``;

const Wrapper = styled.div`
  width: 260px;
  height: 79vh;
  box-shadow: 2px 3px 8px gray;
  position: absolute;
  top: 74px;
  left: 0;
  margin-top: -5px;
  line-height: 1.4;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 18px;
  font-weight: 800;
  padding: 15px 14px;
  z-index: 90;
  background: white;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 2;
  cursor: pointer;
  width: 100%;
  transition: all 0.4s linear;
  &:hover,
  &.active {
    color: blue;
  }

  h6 {
    font-size: 13px;
    font-weight: 400;
  }
`;

const Icon = styled.h3``;

export default ListWrapper;
