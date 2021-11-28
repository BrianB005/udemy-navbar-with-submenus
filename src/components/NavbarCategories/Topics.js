import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Topics = () => {
  const { topics } = useSelector((state) => state.subsubmenu);

  return (
    <Container>
      <Wrapper>
        <h2>Popular Topics</h2>
        {topics.map((topic) => (
          <ListItem key={topic.id} className="link">
            <h6>{topic.text}</h6>
          </ListItem>
        ))}
      </Wrapper>
    </Container>
  );
};
const Container = styled.div``;

const Wrapper = styled.div`
  h2 {
    color: black;
    font-size: 16px;
    margin-bottom: 4px;
  }
  width: 260px;
  height: 79vh;
  box-shadow: 2px 3px 8px gray;
  position: absolute;
  top: 74px;
  left: 521px;
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
  line-height: 2.2;
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

export default Topics;
