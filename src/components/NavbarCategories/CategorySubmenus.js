import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { openSubSubmenu } from "../../redux/actions";

const CategorySubmenus = () => {
  const linksToShow = useSelector((state) => state.submenu);
  const { links, submenuOpen } = linksToShow;
  const dispatch = useDispatch();
  const handleHover = (e) => {
    const itemHovered = e.target;

    itemHovered.classList.add("active");
    if (itemHovered.classList.contains("link")) {
      dispatch(openSubSubmenu(itemHovered.firstElementChild.innerText));
    }
  };
  if (submenuOpen) {
    return (
      <Wrapper>
        {links.map((link) => (
          <CategoryItem
            key={link.id}
            className="link"
            onMouseEnter={handleHover}
          >
            <h6>{link.text}</h6>
            <Icon>{link.icon}</Icon>
          </CategoryItem>
        ))}
      </Wrapper>
    );
  }
};
const Wrapper = styled.div`
  width: 260px;
  height: 79vh;
  box-shadow: 2px 3px 8px gray;
  position: absolute;
  top: 74px;
  left: 262px;
  margin-top: -5px;
  line-height: 1.4;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 18px;
  font-weight: 800;
  padding: 15px 14px;
  z-index: 90;
  background: white;
`;

const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.8;
  cursor: pointer;
  transition: all 0.4s linear;
  &:hover {
    color: blue;
  }

  h6 {
    font-size: 13px;
    font-weight: 400;
  }
`;

const Icon = styled.h3``;

export default CategorySubmenus;
